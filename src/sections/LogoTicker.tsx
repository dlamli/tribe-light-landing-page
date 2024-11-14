"use client";

import { motion } from "framer-motion";

import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulseLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

const logos = [
  {
    src: AcmeLogo,
    alt: "Acme",
  },
  {
    src: QuantumLogo,
    alt: "Quantum",
  },
  {
    src: EchoLogo,
    alt: "Echo",
  },
  {
    src: CelestialLogo,
    alt: "Celestial",
  },
  {
    src: PulseLogo,
    alt: "Pulse",
  },
  {
    src: ApexLogo,
    alt: "Apex",
  },
];

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-14 flex-none pr-14"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* First logo set for animation */}
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="logo-ticker-img"
            />
          ))}
          {/* Second logo set for animation */}
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="logo-ticker-img"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
