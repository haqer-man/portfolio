"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { classname } from "@/lib/utils";

type Segment = { text: string; color: string };

export const TextHoverEffect = ({
  segments,
  duration,
  className,
}: {
  segments: Segment[];
  duration?: number;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor]);

  // One tspan per word, each with its own stroke color.
  // Spaces live inside the segment text ("I'm ") and xmlSpace keeps them.
  const coloredWords = segments.map((s, i) => (
    <tspan key={i} stroke={s.color}>
      {s.text}
    </tspan>
  ));
  const plainWords = segments.map((s) => s.text).join("");

  return (
    <svg
      ref={svgRef}
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={classname("select-none overflow-visible h-[1.2em]", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Hover-only outline layer */}
      <text
        x="0"
        y="50%"
        dominantBaseline="middle"
        strokeWidth="1.5"
        xmlSpace="preserve"
        className="fill-transparent font-[helvetica] font-bold"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {coloredWords}
      </text>

      {/* Always-visible outline that draws in */}
      <motion.text
        x="0"
        y="50%"
        dominantBaseline="middle"
        strokeWidth="1.5"
        xmlSpace="preserve"
        className="fill-transparent font-[helvetica] font-bold"
        initial={{ strokeDashoffset: 8000, strokeDasharray: 8000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 8000 }}
        transition={{ duration: 10, ease: "easeInOut" }}
      >
        {coloredWords}
      </motion.text>

      {/* Gradient reveal layer that follows the cursor (single plain string) */}
      <text
        x="0"
        y="50%"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="2"
        xmlSpace="preserve"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] font-bold"
      >
        {plainWords}
      </text>
    </svg>
  );
};