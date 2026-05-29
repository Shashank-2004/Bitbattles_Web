import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

export function Reveal({ as = "div", children, className = "", variants = fadeUp }) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
