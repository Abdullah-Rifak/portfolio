"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  target: number;
  start?: number;
  duration?: number;
  suffix?: string;
};

export default function CountUp({ target, start = 0, duration = 1400, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    let rafId = 0;
    let startTime = 0;

    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const next = Math.round(start + (target - start) * eased);
      setCount(next);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setIsComplete(true);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [isVisible, target, start, duration]);

  const shouldPulseSuffix = suffix.trim() === "+" && isComplete;

  return (
    <span ref={containerRef}>
      {count}
      {suffix ? <span className={shouldPulseSuffix ? "count-suffix-pulse" : ""}>{suffix}</span> : null}
    </span>
  );
}
