import { Heart } from "lucide-react";
import Image from "next/image";

type Props = {
  product: {
    id: number;
    name: string;
    subtitle: string;
    price: string;
    image: string;
  };
};

export default function SimilarProductCard({
  product,
}: Props) {
  return (
    <div className="w-[320px] shrink-0">
      <div
        className="
          relative
          bg-[#f8f8f8]
          rounded-2xl
          h-[320px]
          overflow-hidden
        "
      >
        <button
          className="
            absolute
            top-4
            right-4
            w-9
            h-9
            rounded-full
            bg-white
            shadow-sm
            flex
            items-center
            justify-center
          "
        >
          <Heart size={16} />
        </button>

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="320px"
          className="
            object-contain
            p-8
          "
        />
      </div>

      <div className="pt-4">
        <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
          Paul Vosheront
        </p>

        <h3 className="mt-2 text-[18px] leading-6 text-black">
          {product.name}
        </h3>

        <p className="text-[15px] text-neutral-700">
          {product.subtitle}
        </p>

        <p className="mt-4 text-lg font-medium">
          {product.price}
        </p>
      </div>
    </div>
  );
}
