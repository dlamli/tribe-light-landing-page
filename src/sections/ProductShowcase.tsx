import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <p className="title-tag">Boost your productivity</p>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-title-gradient mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-xl leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product Image" className="mt-10" />
          <Image
            src={PyramidImage}
            alt="Pyramid Image"
            className="absolute -right-36 -top-32 hidden md:block md:size-64 "
          />
          <Image
            src={TubeImage}
            alt="Tube Image"
            className="absolute bottom-24 -left-36 hidden md:block  md:size-64"
          />
        </div>
      </div>
    </section>
  );
};
