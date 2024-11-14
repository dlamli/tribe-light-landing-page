"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import { useRef } from "react";
import { useMotion } from "@/hooks";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { translateY } = useMotion({
    ref: sectionRef,
    translateOption: {
      inputRange: [0, 1],
      outPutRange: [150, -150],
    },
  });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to trace
            your progress and motivates your efforts.
          </p>
          <motion.img
            src={StarImage.src}
            alt="Star Image"
            className="w-80 absolute -left-80 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={SpringImage.src}
            alt="Spring Image"
            className="w-80 absolute -right-80 -top-4"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex items-center justify-center gap-2 mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
