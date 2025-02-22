"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import { useMotion } from "@/hooks";

export const ProductShowcase = () => {
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
      className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <p className="title-tag">Boost your productivity</p>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={PyramidImage.src}
            alt="Pyramid Image"
            className="absolute -right-36 -top-32 hidden md:block md:size-64 "
            style={{
              translateY,
            }}
          />
          <motion.img
            src={TubeImage.src}
            alt="Tube Image"
            className="absolute bottom-24 -left-36 hidden md:block  md:size-64"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
