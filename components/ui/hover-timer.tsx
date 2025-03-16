"use client";

import { useMotionValue, useMotionTemplate, motion, MotionValue } from "framer-motion";
import React, { useState, useEffect, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import CountdownTimer from "../countdown";

interface EvervaultCardProps {
  className?: string;
}

interface MouseMoveEvent extends MouseEvent<HTMLDivElement> {
  currentTarget: HTMLDivElement;
}

export const EvervaultCard: React.FC<EvervaultCardProps> = ({ className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState<string>("");

  useEffect(() => {
    const str = generateRandomString(50000);
    setRandomString(str);
  }, []);

  const onMouseMove = (event: MouseMoveEvent) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);

    const str = generateRandomString(50000);
    setRandomString(str);
  };

  return (
    <div
      className={cn(
        "bg-black w-full h-full relative ",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10">
          <span className="text-terminal-green"><CountdownTimer /></span>
        </div>
      </div>
    </div>
  );
};

interface CardPatternProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  randomString: string;
}

export function CardPattern({ mouseX, mouseY, randomString }: CardPatternProps) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomString = (length: number): string => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Icon: React.FC<IconProps> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
