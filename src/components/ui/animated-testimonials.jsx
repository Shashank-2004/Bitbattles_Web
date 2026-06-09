import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrain,
  IconClockCheck,
  IconShieldCheck,
  IconUsersGroup,
} from "@tabler/icons-react";

const visualIcons = [IconUsersGroup, IconBrain, IconClockCheck, IconShieldCheck];

export function AnimatedTestimonials({ testimonials, autoplay = true }) {
  const [active, setActive] = useState(0);
  const [failedImages, setFailedImages] = useState({});

  const activeItem = testimonials[active];
  const ActiveIcon = visualIcons[active % visualIcons.length];

  const rotateValues = useMemo(
    () => testimonials.map((_, index) => ((index % 2 === 0 ? 1 : -1) * (4 + index * 2)) % 12),
    [testimonials],
  );

  function handleNext() {
    setActive((prev) => (prev + 1) % testimonials.length);
  }

  function handlePrev() {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  useEffect(() => {
    if (!autoplay || testimonials.length < 2) {
      return undefined;
    }

    const interval = window.setInterval(handleNext, 5500);
    return () => window.clearInterval(interval);
  }, [autoplay, testimonials.length]);

  if (!testimonials.length) {
    return null;
  }

  return (
    <div className="mx-auto max-w-[1180px]">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[520px]">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(255,106,42,0.22),transparent_42%)] blur-2xl" />
          <div className="absolute inset-x-6 bottom-4 h-24 rounded-full bg-bitOrange/20 blur-3xl" />

          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, index) => {
              const isActive = index === active;
              const hasImage = testimonial.src && !failedImages[testimonial.src];
              const Icon = visualIcons[index % visualIcons.length];

              return (
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0.28,
                    scale: isActive ? 1 : 0.9,
                    rotate: isActive ? 0 : rotateValues[index],
                    x: isActive ? 0 : index < active ? -26 : 26,
                    y: isActive ? 0 : 20 + index * 3,
                    zIndex: isActive ? 30 : testimonials.length - index,
                  }}
                  className="absolute inset-0 origin-bottom"
                  exit={{ opacity: 0, scale: 0.92 }}
                  initial={{ opacity: 0, scale: 0.94, y: 18 }}
                  key={testimonial.name}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className="group relative h-full overflow-hidden rounded-[2.25rem] bg-[linear-gradient(145deg,rgba(5,7,16,0.76),rgba(8,17,31,0.55))] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.42),0_0_46px_rgba(255,106,42,0.18)]">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,106,42,0.10),transparent_38%,rgba(13,99,153,0.10))]" />
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-bitOrange/20 blur-3xl transition group-hover:bg-bitOrange/30" />
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-bitOrange/80 to-transparent" />

                    {hasImage ? (
                      <img
                        alt={testimonial.name}
                        className="relative h-full w-full rounded-[2rem] object-cover opacity-90 mix-blend-screen"
                        draggable={false}
                        onError={() =>
                          setFailedImages((current) => ({
                            ...current,
                            [testimonial.src]: true,
                          }))
                        }
                        src={testimonial.src}
                      />
                    ) : (
                      <div className="relative grid h-full place-items-center rounded-[2rem] bg-[radial-gradient(circle_at_50%_34%,rgba(255,106,42,0.30),transparent_35%),linear-gradient(145deg,#08111f,#050710)]">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
                        <div className="relative grid h-28 w-28 place-items-center rounded-3xl border border-bitOrange/55 bg-bitOrange/10 text-bitOrange shadow-[0_0_44px_rgba(255,106,42,0.28)]">
                          <Icon className="h-12 w-12" strokeWidth={1.7} />
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-black/45 p-4 backdrop-blur-xl">
                      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">
                        {testimonial.designation}
                      </p>
                      <p className="mt-2 text-lg font-black text-white">{testimonial.name}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="relative p-2 md:p-4">
          <div className="absolute -left-px top-8 h-20 w-px bg-gradient-to-b from-transparent via-bitOrange to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              initial={{ opacity: 0, y: 14 }}
              key={activeItem.name}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-bitOrange/45 bg-bitOrange/10 text-bitOrange shadow-[0_0_28px_rgba(255,106,42,0.16)]">
                  <ActiveIcon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-2xl font-black tracking-normal text-white">
                    {activeItem.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-slate-500">
                    {activeItem.designation}
                  </p>
                </div>
              </div>

              <motion.p className="mt-8 text-base font-semibold leading-8 text-slate-300 md:text-lg">
                {activeItem.quote.split(" ").map((word, index) => (
                  <motion.span
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    className="inline-block"
                    initial={{ filter: "blur(8px)", opacity: 0, y: 5 }}
                    key={`${word}-${index}`}
                    transition={{
                      delay: 0.015 * index,
                      duration: 0.18,
                      ease: "easeOut",
                    }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  aria-label={`Show ${testimonial.name}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === active ? "w-7 bg-bitOrange" : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                  key={testimonial.name}
                  onClick={() => setActive(index)}
                  type="button"
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                aria-label="Previous item"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-bitOrange hover:text-bitOrange"
                onClick={handlePrev}
                type="button"
              >
                <IconArrowLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next item"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-bitOrange hover:text-bitOrange"
                onClick={handleNext}
                type="button"
              >
                <IconArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
