"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Add border animation style on component mount
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes borderAnimation {
        0% {
          border-color: rgba(100, 100, 100, 0.3);
        }
        50% {
          border-color: rgba(100, 100, 200, 1);
        }
        100% {
          border-color: rgba(100, 100, 100, 0.3);
        }
      }

      .resume-link {
        animation: borderAnimation 2s infinite;
      }
    `;
    document.head.appendChild(style);

    // Clean up on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-fit lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(20px) saturate(180%)", // Blur effect
          background: "linear-gradient(90deg, rgba(2,5,15,0.6) 0%, rgba(100,3,6,0.6) 100%)", // Gradient background
          borderRadius: "12px",
          border: "0.5px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-300  items-center flex space-x-1 text-neutral-600 dark:hover:text-red hover:text-neutral-600"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      <a
  href="/Resume.pdf"
  download
  className="border text-sm font-medium relative border-neutral-100 dark:border-white/[0.2] text-gold px-2 py-1 rounded resume-link"
>
  <span className="flex items-center space-x-1">
    <span>RESUME</span>
    <FontAwesomeIcon icon={faDownload} />
  </span>
  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
</a>

      </motion.div>
    </AnimatePresence>
  );
};
