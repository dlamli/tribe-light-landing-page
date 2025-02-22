"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import CheckIcon from "@/assets/check.svg";
import { TPricingTier } from "@/libs";

export const PricingTier = ({
  title,
  monthlyPrice,
  buttonText,
  features,
  popular,
  inverse,
}: TPricingTier) => {
  return (
    <div
      key={title}
      className={twMerge(
        "card",
        inverse && "border-black bg-black text-white/60 "
      )}
    >
      <div className="flex justify-between">
        <h3
          className={twMerge(
            "text-lg font-bold text-black/50",
            inverse && "text-white/60"
          )}
        >
          {title}
        </h3>
        {popular && (
          <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
            <motion.span
              className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
              animate={{
                backgroundPositionX: "100%",
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                duration: 1,
              }}
            >
              Popular
            </motion.span>
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-1 mt-8">
        <span className="text-4xl font-bold tracking-tighter leading-none">
          ${monthlyPrice}
        </span>
        <span className="tracking-tight font-bold text-black/50">/month</span>
      </div>
      <button
        className={twMerge(
          "btn btn-primary w-full mt-8",
          inverse && "bg-white text-black"
        )}
      >
        {buttonText}
      </button>
      <ul className="flex flex-col gap-5 mt-8">
        {features.map((feature) => (
          <li key={feature} className="text-sm flex items-center gap-4">
            <CheckIcon className="size-6" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
