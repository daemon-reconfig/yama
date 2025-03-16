"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const containerRef = useRef<HTMLDivElement>(null);

  const wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animate(
        "span",
        {
          opacity: [0, 1],
          filter: filter ? ["blur(10px)", "blur(0px)"] : ["none", "none"],
        },
        {
          duration: duration,
          delay: stagger(0.1),
        }
      );
    }
  }, [isVisible]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="text-neutral-200"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} ref={containerRef}>
      <div className="mt-4">
        <div className="text-terminal-green text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
