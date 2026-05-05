import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

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
 * Scroll-triggered count-up. Starts when the element enters the viewport.
 * SSR-safe: renders the final value during SSR, animates only on client.
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
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(from);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  const format = (n: number) =>
    `${prefix}${n.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`;

  const [text, setText] = useState(format(to));

  useEffect(() => {
    setMounted(true);
    setText(format(from));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (mounted && inView) mv.set(to);
  }, [mounted, inView, to, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setText(format(v)));
    return () => unsub();
  }, [spring]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}
