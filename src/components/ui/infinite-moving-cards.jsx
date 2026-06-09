"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  variant = "testimonial",
  title,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      if (scrollerRef.current.dataset.animated === "true") {
        return;
      }

const scrollerContent = Array.from(scrollerRef.current.children);

for (let i = 0; i < 4; i++) {
  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);

    if (scrollerRef.current) {
      scrollerRef.current.appendChild(duplicatedItem);
    }
  });
}

      getDirection();
      getSpeed();

      scrollerRef.current.dataset.animated = "true";

      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "18s"
        );
      } else if (speed === "normal") {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "32s"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "52s"
        );
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-max shrink-0 flex-nowrap gap-8 py-3",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "relative max-w-full shrink-0 overflow-hidden",
              variant === "logo"
                ? "w-auto"
                : "w-[330px] rounded-[1.5rem] bg-[linear-gradient(145deg,rgba(8,17,31,0.92),rgba(5,7,16,0.96))] px-5 py-5 shadow-[0_18px_54px_rgba(0,0,0,0.32),0_0_22px_rgba(255,106,42,0.07)] md:w-[390px]"
            )}
            key={`${item.name || idx}-${idx}`}
          >
{variant === "logo" ? (
  title === "Technology stack" ? (
    <div className="group relative flex items-center justify-center px-6 py-2">

      <div className="absolute h-16 w-16 rounded-full bg-bitOrange/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <img
        alt=""
        className="relative z-10 h-12 w-12 object-contain opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
        src={item.logo}
      />
    </div>
  ) : (
    <div className="flex items-center gap-5 px-2">

      <span className="text-lg text-bitOrange">
        ✦
      </span>

      <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
        {item.name}
      </span>
    </div>
  )
) : (

              <blockquote className="relative flex items-start gap-5">
                <img
                  alt=""
                  className="h-16 w-16 shrink-0 rounded-full object-cover opacity-90 shadow-[0_0_24px_rgba(255,106,42,0.18)]"
                  src={item.logo}
                />

                <span className="relative z-20">
                  <span className="block text-sm font-semibold leading-7 text-slate-300">
                    {item.quote}
                  </span>

                  <span className="mt-5 flex flex-col gap-1">
                    <span className="text-sm font-black leading-[1.6] text-white">
                      {item.name}
                    </span>

                    <span className="text-xs font-semibold leading-[1.6] text-bitOrange/80">
                      {item.title}
                    </span>
                  </span>
                </span>
              </blockquote>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
