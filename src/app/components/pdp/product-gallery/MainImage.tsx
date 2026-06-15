import Image from "next/image";

type MainImageProps = {
  image: string;
};

export default function MainImage({
  image,
}: MainImageProps) {
  return (
    <div
      className="
        flex-1
        bg-white
        rounded-[28px]
        border
        overflow-hidden
        relative
      "
    >
      {/* Stock Badge */}

      <div
        className="
          absolute
          top-5
          left-5
          z-10
          px-3
          py-1
          rounded-full
          bg-green-50
          border
          border-green-300
          text-xs
        "
      >
        In Stock
      </div>

      {/* Wishlist */}

      <button
        className="
          absolute
          top-5
          right-5
          z-10
          w-10
          h-10
          rounded-full
          bg-white
          shadow
        "
      >
        ♡
      </button>

      {/* Main Image */}

      <div
        className="
          h-[540px]
          flex
          items-center
          justify-center
          cursor-zoom-in
          relative
        "
      >
        <Image
          src={image}
          alt="Product"
          fill
          sizes="(min-width: 1024px) 620px, 100vw"
          className="
            object-contain
            p-10
          "
        />
      </div>

      {/* Footer */}

      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
          flex
          justify-between
          text-xs
          text-gray-500
        "
      >
        <span>Hover to inspect</span>

        <span>01 / 05</span>
      </div>
    </div>
  );
}
