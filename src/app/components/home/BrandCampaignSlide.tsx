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
    <div className="relative w-full overflow-hidden">

      {/* Banner Image */}
      <Image
        src={image}
        alt={title}
        width={1920}
        height={850}
        priority
        className="w-full object-cover"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center text-white">

          <h2 className="text-4xl md:text-7xl font-bold">
            {title}
          </h2>

          <p className="mt-4 text-lg md:text-2xl uppercase tracking-[5px]">
            {subtitle}
          </p>

          <button className="mt-8 border border-white px-8 py-4 rounded-full backdrop-blur-md hover:bg-white hover:text-black transition">
            {buttonText}
          </button>

        </div>

      </div>

    </div>
  );
}