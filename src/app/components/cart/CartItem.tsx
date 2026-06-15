"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Trash2, ChevronDown, ChevronRight } from "lucide-react";

type CartItemAttribute = {
  label: string;
  value: string;
};

type CartItemProps = {
  id: string;
  name: string;
  price: string;
  image: string;
  attributes: CartItemAttribute[];
  initialQuantity?: number;
};

export default function CartItem({
  id,
  name,
  price,
  image,
  attributes,
  initialQuantity = 1,
}: CartItemProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [quantity, setQuantity] = useState(initialQuantity);

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  };

  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  const updateQuantity = (value: string) => {
    const nextQuantity = Number(value);

    if (!Number.isNaN(nextQuantity) && nextQuantity >= 1) {
      setQuantity(Math.floor(nextQuantity));
    }
  };

  return (
    <div className="border-t border-neutral-200 pt-12">

      <div className="flex items-start gap-8">

        {/* Product Image */}

        <Image
          src={image}
          alt={name}
          width={90}
          height={90}
          sizes="90px"
          className="h-[90px] w-[90px] shrink-0 object-contain"
        />

        {/* Product Content */}

        <div className="flex-1">

          <h2
            className="
              text-[22px]
              lg:text-[1.25rem]
              leading-[1.4]
              font-extra-bold
              mt-1
              max-w-[420px]
              mb-2
            "
          >
            {name}
          </h2>

          <p
            className="
              mt-4
              text-[22px]
              font-semibold
              font-mono
            "
          >
            {price}
          </p>

          {/* Quantity */}

          <div className="flex mt-8">

            <button
              type="button"
              onClick={decreaseQuantity}
              className="
                w-11
                h-11
                border
                flex
                items-center
                justify-center
                cursor-pointer
              "
            >
              −
            </button>

            <input
              type="text"
              inputMode="numeric"
              value={quantity}
              aria-label="Quantity"
              onChange={(event) => updateQuantity(event.target.value)}
              className="
                w-11
                h-11
                border-y
                text-center
                outline-none
              "
            />

            <button
              type="button"
              onClick={increaseQuantity}
              className="
                w-11
                h-11
                border
                flex
                items-center
                justify-center
                cursor-pointer
              "
            >
              +
            </button>

          </div>

          {/* Details */}

          <button
            type="button"
            aria-expanded={isDetailsOpen}
            aria-controls={`${id}-details`}
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className="
              flex
              items-center
              gap-2
              mt-10
              italic
              text-[18px]
              cursor-pointer
            "
          >
            Details

            {isDetailsOpen ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </button>

          {/* Product Attributes */}

          {isDetailsOpen && (
            <div
              id={`${id}-details`}
              className="
                mt-8
                grid
                grid-cols-2
                gap-y-5
                text-[18px]
              "
            >
              {attributes.map((attribute) => (
                <Fragment key={attribute.label}>
                  <span className="text-neutral-600">
                    {attribute.label}:
                  </span>

                  <span>
                    {attribute.value}
                  </span>
                </Fragment>
              ))}

            </div>
          )}

        </div>

        {/* Delete */}

        <button
          className="
            w-12
            h-12
            rounded-full
            bg-white
            shadow-lg
            flex
            items-center
            justify-center
          "
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}
