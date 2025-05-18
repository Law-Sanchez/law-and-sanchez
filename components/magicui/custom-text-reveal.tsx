"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  videoSrc: string;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  videoSrc,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = children.split(" ");
  return (
    <div
      ref={targetRef}
      className={cn("relative z-0 h-[200vh] bg-transparent", className)}
    >
      <div className={"sticky top-0 h-[50%]"}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-[-2] h-[100%] object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 z-[-1] h-[100%]"
          // style={{
          //   background:
          //     "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.7) 70%, transparent 100%)",
          // }}
          style={{
            background: "rgba(255, 255, 255, 0.7)",
          }}
        />
        <div className="mx-auto h-[100%] flex max-w-4xl items-center px-[1rem] py-[5rem]">
          <span
            ref={targetRef}
            className={
              "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
            }
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-slate-700"}>
        {children}
      </motion.span>
    </span>
  );
};
