export type TPricingTier = {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
};

export type TTestimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

export type TUseMotion = {
  ref: React.RefObject<HTMLDivElement>;
  translateOption: {
    inputRange: number[];
    outPutRange: number[];
  };
};
