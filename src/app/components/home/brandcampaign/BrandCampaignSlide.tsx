import Image from "next/image";

type BrandCampaignSlideProps = {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
};

export default function BrandCampaignSlide({
  title,
  subtitle,
  image,
  buttonText,
}: BrandCampaignSlideProps) {
  return (
    <div className="relative h-[440px] w-full overflow-hidden">

      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 text-center">

        <h2 className="text-white text-6xl font-black uppercase">
          {title}
        </h2>

        <p className="text-white text-3xl uppercase mt-2">
          {subtitle}
        </p>

        <button
          className="
            mt-10
            px-10
            py-4
            rounded-full
            border
            border-black
            bg-black/40
            backdrop-blur-sm
            text-white
            hover:bg-black
            transition
          "
        >
          {buttonText}
        </button>

      </div>

    </div>
  );
}