import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

import { TTestimonial } from "@/libs";

export const TestimonialColumn = ({
  className,
  testimonial,
}: {
  className?: string;
  testimonial: TTestimonial[];
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
        className
      )}
    >
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
              <p className="font-medium tracking-tight leading-5">{name}</p>
              <p className="leading-5 tracking-tight">{username}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
