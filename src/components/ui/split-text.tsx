"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import React, { useEffect, useRef, ReactNode, ElementType } from "react";

function Stylesheet() {
  return (
    <style>{`
      .split-word {
          will-change: transform, opacity, filter;
          display: inline-block;
      }
    `}</style>
  );
}

interface SplitTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function SplitText({
  children,
  as: Tag = "h1",
  className = "",
}: SplitTextProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    document.fonts.ready.then(() => {
      if (!element) return;

      element.style.visibility = "visible";

      const { words } = splitText(element); // Removed the options object

      if (!words || words.length === 0) {
        return;
      }

      animate(
        words,
        {
          opacity: [0, 1],
          transform: ["translateY(10px)", "translateY(0px)"],
          filter: ["blur(8px)", "blur(0px)"],
        },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, [children]);

  return (
    <>
      <Tag
        ref={elementRef as any}
        className={className}
        style={{ visibility: "hidden" }}
      >
        {children}
      </Tag>
      <Stylesheet />
    </>
  );
}
