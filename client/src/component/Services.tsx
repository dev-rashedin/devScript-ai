'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export default function Services() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true); // mark as client-mounted
  }, []);

  // useScroll only after mount
  const { scrollYProgress } = useScroll({
    container: mounted ? containerRef : undefined,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // scroll logic here
  });

  return (
    <div ref={containerRef}>
      {mounted && <div>{/* Your scrollable content */}</div>}
    </div>
  );
}
