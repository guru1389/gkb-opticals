import Image from "next/image";

type CategorySlideProps = {
  title: string;
  image: string;
};

export default function CategorySlide({
  title,
  image,
}: CategorySlideProps) {
  return (
    <div className="relative pb-10">

      {/* Image */}
      <div className="w-full aspect-[7/8] hidden lg:block relative overflow-hidden rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">

        <Image
          src={image}
          alt={title}
          width={280}
          height={320}
          className="object-cover w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105"
          style={{
            height: "320px",
            objectFit: "cover",
          }}
        />

      </div>

      {/* Label */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[11px]">

        <button className="bg-white shadow-md px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap">
          {title}
        </button>

      </div>

    </div>
  );
}