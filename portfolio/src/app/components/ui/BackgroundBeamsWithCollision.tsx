"use client";
import { classname } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect, useMemo } from "react";

const rand = (min: number, max: number) => min + Math.random() * (max - min);

type Beam = {
  id: number;
  length: number;
  angle: number; // degrees from vertical, + = falls toward the right
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  duration: number;
};

export const BackgroundBeamsWithCollision = ({
  children,
  className,
  minDelay = 300, // ms between spawns
  maxDelay = 1500,
  minSpeed = 150, // px per second
  maxSpeed = 350,
  minLength = 24, // px
  maxLength = 80,
  maxAngle = 25, // degrees from straight down
  maxBeams = 12, // cap on beams alive at once
}: {
  children: React.ReactNode;
  className?: string;
  minDelay?: number;
  maxDelay?: number;
  minSpeed?: number;
  maxSpeed?: number;
  minLength?: number;
  maxLength?: number;
  maxAngle?: number;
  maxBeams?: number;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null); // the "floor"
  const parentRef = useRef<HTMLDivElement | null>(null);
  const nextId = useRef(0);
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;
    const limit = Math.min(Math.abs(maxAngle), 60);

    const spawn = () => {
      if (cancelled) return;
      const el = parentRef.current;
      if (el) {
        const { width, height } = el.getBoundingClientRect();
        const length = rand(minLength, maxLength);
        const angle = rand(-limit, limit);
        const rad = (angle * Math.PI) / 180;

        const y0 = -length;
        const y1 = height + length;
        // Height of the beam's top edge at the moment its tip touches the floor
        const yHit = height - (length / 2) * (1 + Math.cos(rad));

        // Pick where it lands first, then work backwards to the start X, so
        // every beam hits the floor on-screen no matter how steep its angle.
        const landX = rand(0, width);
        const x0 = landX - Math.tan(rad) * (yHit - y0) - (length / 2) * Math.sin(rad);
        const x1 = x0 + Math.tan(rad) * (y1 - y0);

        setBeams((current) =>
          current.length >= maxBeams
            ? current
            : [
                ...current,
                {
                  id: nextId.current++,
                  length,
                  angle,
                  x0,
                  y0,
                  x1,
                  y1,
                  duration: (y1 - y0) / rand(minSpeed, maxSpeed),
                },
              ]
        );
      }
      timeout = setTimeout(spawn, rand(minDelay, maxDelay));
    };

    timeout = setTimeout(spawn, rand(minDelay, maxDelay));
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [minDelay, maxDelay, minSpeed, maxSpeed, minLength, maxLength, maxAngle, maxBeams]);

  const removeBeam = (id: number) =>
    setBeams((current) => current.filter((b) => b.id !== id));

  return (
    <div
      ref={parentRef}
      className={classname(
        "h-96 md:h-[40rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden",
        // h-screen if you want bigger
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionBeam
          key={beam.id}
          beam={beam}
          parentRef={parentRef}
          floorRef={containerRef}
          onDone={removeBeam}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionBeam = ({
  beam,
  parentRef,
  floorRef,
  onDone,
}: {
  beam: Beam;
  parentRef: React.RefObject<HTMLDivElement | null>;
  floorRef: React.RefObject<HTMLDivElement | null>;
  onDone: (id: number) => void;
}) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [hit, setHit] = useState<{ x: number; y: number } | null>(null);
  const rad = (beam.angle * Math.PI) / 180;

  // Watch for the beam's tip reaching the floor
  useEffect(() => {
    if (hit) return;
    const interval = setInterval(() => {
      const b = beamRef.current;
      const f = floorRef.current;
      const p = parentRef.current;
      if (!b || !f || !p) return;

      const beamRect = b.getBoundingClientRect();
      const floorRect = f.getBoundingClientRect();
      const parentRect = p.getBoundingClientRect();

      if (beamRect.bottom >= floorRect.top) {
        // The bounding box is centered on the beam; the glowing tip sits
        // half a beam-length along its axis, so shift sideways by that much.
        setHit({
          x:
            beamRect.left -
            parentRect.left +
            beamRect.width / 2 +
            (beam.length / 2) * Math.sin(rad),
          y: beamRect.bottom - parentRect.top,
        });
      }
    }, 30);
    return () => clearInterval(interval);
  }, [hit, beam.length, rad, floorRef, parentRef]);

  // Remove the beam once its explosion has played
  useEffect(() => {
    if (!hit) return;
    const timer = setTimeout(() => onDone(beam.id), 2000);
    return () => clearTimeout(timer);
  }, [hit, beam.id, onDone]);

  return (
    <>
      {!hit && (
        <motion.div
          ref={beamRef}
          className="absolute left-0 top-0 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent"
          style={{ height: beam.length }}
          // CSS rotates clockwise for positive values, which would swing the
          // beam's bottom toward the left, so negate to make + = rightward fall.
          initial={{ x: beam.x0, y: beam.y0, rotate: -beam.angle }}
          animate={{ x: beam.x1, y: beam.y1, rotate: -beam.angle }}
          transition={{ duration: beam.duration, ease: "linear" }}
          onAnimationComplete={() => onDone(beam.id)}
        />
      )}
      <AnimatePresence>
        {hit && (
          <Explosion
            key={`${beam.id}-explosion`}
            style={{
              left: `${hit.x}px`,
              top: `${hit.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  // Generated once per explosion, not on every re-render
  const spans = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        id: index,
        directionX: Math.floor(Math.random() * 80 - 40),
        directionY: Math.floor(Math.random() * -50 - 10),
        duration: Math.random() * 1.5 + 0.5,
      })),
    []
  );

  return (
    <div {...props} className={classname("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
          transition={{ duration: span.duration, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};