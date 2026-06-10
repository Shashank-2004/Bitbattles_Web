"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";

import { cn } from "@/lib/utils";

export const CometCard = ({
  rotateDepth = 5,
  translateDepth = 5,
  className,
  children,
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth premium motion
  const mouseXSpring = useSpring(x, {
    stiffness: 120,
    damping: 18,
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 120,
    damping: 18,
  });

  // Rotation
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`-${rotateDepth}deg`, `${rotateDepth}deg`]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`${rotateDepth}deg`, `-${rotateDepth}deg`]
  );

  // Slight floating movement
  const translateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${translateDepth}px`, `${translateDepth}px`]
  );

  const translateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${translateDepth}px`, `-${translateDepth}px`]
  );

  // Glare tracking
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);

  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  // Orange themed subtle glare
  const glareBackground = useMotionTemplate`
    radial-gradient(
      circle at ${glareX}% ${glareY}%,
      rgba(255, 140, 60, 0.18) 0%,
      rgba(255, 140, 60, 0.08) 25%,
      rgba(255, 140, 60, 0) 80%
    )
  `;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={cn("perspective-distant transform-3d", className)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          boxShadow: "0 10px 35px rgba(0,0,0,0.22)",
        }}
        initial={{ scale: 1, z: 0 }}
        whileHover={{
          scale: 1.01,
          z: 20,
          transition: {
            duration: 0.2,
          },
        }}
        className="relative rounded-2xl"
      >
        {children}

        {/* Subtle glare overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-soft-light"
          style={{
            background: glareBackground,
            opacity: 0.08,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
};