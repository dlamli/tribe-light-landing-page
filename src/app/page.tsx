import {
  CallToAction,
  Header,
  Hero,
  LogoTicker,
  Pricing,
  ProductShowcase,
  Testimonials,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  );
}
