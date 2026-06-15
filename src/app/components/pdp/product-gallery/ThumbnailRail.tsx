import Image from "next/image";

type ThumbnailRailProps = {
  images: string[];
  selectedImage: string;
  onSelect: (image: string) => void;
};

export default function ThumbnailRail({
  images,
  selectedImage,
  onSelect,
}: ThumbnailRailProps) {
  return (
    <div
      className="
        flex flex-col items-center gap-2 w-[96px] shrink-0
      "
    >
      {/* Up Arrow */}

      <button
        className="
          w-10
          h-10
          rounded-full
          border
          bg-white
        "
      >
        ↑
      </button>

      {/* Thumbnails */}

      {images.map((image) => (
        <button
          key={image}
          onClick={() => onSelect(image)}
          className={`
            w-[82px]
            h-[82px]
            rounded-2xl
            border
            bg-white
            flex
            items-center
            justify-center
            overflow-hidden
            relative

            ${
              selectedImage === image
                ? "border-black"
                : "border-gray-200"
            }
          `}
        >
          <Image
            src={image}
            alt="Thumbnail"
            fill
            sizes="82px"
            className="
              object-contain
              p-3
            "
          />
        </button>
      ))}

      {/* Down Arrow */}

      <button
        className="
          w-10
          h-10
          rounded-full
          border
          bg-white
        "
      >
        ↓
      </button>
    </div>
  );
}
