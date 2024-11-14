import { TUseMotion } from "@/libs";
import { useScroll, useTransform } from "framer-motion";

export const useMotion = ({ ref, translateOption }: TUseMotion) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(
    scrollYProgress,
    translateOption.inputRange,
    translateOption.outPutRange
  );

  return { translateY };
};
