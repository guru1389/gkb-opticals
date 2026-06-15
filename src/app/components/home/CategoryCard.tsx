import Image from "next/image";

type CategoryCardProps = {
  title: string;
  image: string;
};

export default function CategoryCard({
  title,
  image,
}: CategoryCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer">

        <div className="relative w-full aspect-[4/3]">

                {/* Background Image */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                    }}
                />
        </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-10 left-8 text-white">

        {/* Title */}
        <h2 className="text-4xl font-semibold">
          {title}
        </h2>

        {/* Hover Link */}
        <div className="overflow-hidden">

          <button
            className="
              mt-4
              flex
              items-center
              gap-2
              text-lg
              opacity-0
              translate-y-5
              transition-all
              duration-500
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            View Collection →
          </button>

        </div>

      </div>

    </div>
  );
}