"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

import { TTestimonial } from "@/libs";

export const TestimonialColumn = ({
  className,
  testimonial,
  duration,
}: {
  className?: string;
  duration?: number;
  testimonial: TTestimonial[];
}) => {
  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{
          translateY: "-50%",
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          duration: duration || 10,
        }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonial.map(({ text, imageSrc, name, username }) => (
                <div key={name} className="card">
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={40}
                      height={40}
                      className="size-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium tracking-tight leading-5">
                        {name}
                      </p>
                      <p className="leading-5 tracking-tight">{username}</p>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
