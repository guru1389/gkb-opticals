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

export default function BrandProductCard({
  product,
}: Props) {
  return (
    <div>

      <div
        className="
          relative
          bg-[#f7f7f7]
          rounded-xl
          overflow-hidden
          aspect-square
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
            border
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
          sizes="280px"
          className="
            object-contain
            p-8
          "
        />
      </div>

      <div className="mt-4">

        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.2em]
            text-neutral-400
          "
        >
          Paul Vosheront
        </p>

        <h3
          className="
            mt-2
            text-[16px]
            leading-6
          "
        >
          {product.name}
        </h3>

        <p
          className="
            text-neutral-600
            text-sm
          "
        >
          {product.subtitle}
        </p>

        <p
          className="
            mt-4
            text-lg
            font-medium
          "
        >
          {product.price}
        </p>

      </div>

    </div>
  );
}
