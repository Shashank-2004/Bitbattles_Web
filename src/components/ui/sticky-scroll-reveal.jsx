"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 42%"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (cardLength <= 1) {
      setActiveCard(0);
      return;
    }

    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1));
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#050710",
    "#08111f",
    "#101725",
  ];
  const linearGradients = [
    "radial-gradient(circle at 50% 20%, rgba(255,106,42,0.26), transparent 36%), linear-gradient(145deg, #08111f, #050710)",
    "radial-gradient(circle at 70% 30%, rgba(13,99,153,0.28), transparent 38%), linear-gradient(145deg, #101725, #050710)",
    "radial-gradient(circle at 30% 30%, rgba(255,106,42,0.2), transparent 35%), linear-gradient(145deg, #07101c, #050710)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative min-h-[84vh] overflow-hidden bg-transparent"
      ref={ref}>
      <div className="sticky top-16 grid min-h-[48vh] items-center gap-8 bg-transparent py-0 md:grid-cols-[0.9fr_1fr]">
        <div className="mx-auto w-full max-w-xl space-y-4 text-center md:mx-0 md:text-left">
          {content.map((item, index) => (
            <motion.div
              animate={{
                opacity: activeCard === index ? 1 : 0.42,
                scale: activeCard === index ? 1 : 0.97,
                x: activeCard === index ? 0 : -8,
              }}
              className="cursor-pointer rounded-[2rem] bg-white/[0.035] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:bg-white/[0.055]"
              key={item.title + index}
              onFocus={() => setActiveCard(index)}
              onMouseEnter={() => setActiveCard(index)}
              tabIndex={0}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="mb-4 h-px w-16 bg-gradient-to-r from-bitOrange via-orange-300 to-transparent md:mx-0 mx-auto" />
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-black tracking-normal text-slate-100 sm:text-3xl">
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mx-auto mt-4 max-w-md text-sm font-semibold leading-7 text-slate-400 md:mx-0">
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
        <div
          style={{ background: backgroundGradient }}
className={cn(
  "hidden h-[22rem] w-full overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#0b1220]/95 via-[#07101c]/95 to-[#111827]/95 backdrop-blur-xl shadow-[0_0_80px_rgba(255,106,42,0.16)] lg:block",
  contentClassName
)}>
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
