"use client";

import { classname } from "@/lib/utils"
import { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  width: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starMinWidth?: number;
  starMaxWidth?: number;
  starHeight?: number;
  starClassName?: string;
}

function getRandomStartPoint() {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight * 2, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
}

export function ShootingStars(
    {
      minSpeed = 10,
      maxSpeed = 20,
      minDelay = 1000,
      maxDelay = 5000,
      starColor = "#e8d580",
      trailColor = "#e7daa0",
      starMinWidth = 10,
      starMaxWidth = 20,
      starHeight = 1,
      starClassName
    }: ShootingStarsProps) {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    function createStar() {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: Math.random() * 2,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        width: Math.random() * (starMaxWidth - starMinWidth) + starMinWidth,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();

    return;
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    function moveStar() {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed + Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100;
          if (
            newX < -starMaxWidth * 2 ||
            newX > window.innerWidth + starMaxWidth * 2 ||
            newY < -starMaxWidth * 2 ||
            newY > (window.innerHeight) + starMaxWidth * 2
          ) {
            return null;
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          }
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);

  return (
    <svg
      ref={svgRef}
      className={classname("w-full h-screen absolute inset-0", starClassName)}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={star.width * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (star.width * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
}