import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type Props = {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/**
 * Scroll-triggered count-up. Uses a spring for organic acceleration and
 * starts only when the element enters the viewport.
 */
export function CountUp({
  to,
  from = 0,
  duration = 1.6,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(from);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(spring, (v) =>
    `${prefix}${v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`
  );
  const [text, setText] = useState(`${prefix}${from.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => rounded.on("change", (v) => setText(v)), [rounded]);

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}
