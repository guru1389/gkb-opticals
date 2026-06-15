"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type CartSummaryProps = {
  itemCount?: number;
  itemTotal?: string;
  grandTotal?: string;
};

export default function CartSummary({
  itemCount = 1,
  itemTotal = "₹43,250",
  grandTotal = "₹43,250",
}: CartSummaryProps) {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isGiftCardOpen, setIsGiftCardOpen] = useState(false);

  return (
    <div className="border-t border-neutral-200 pt-12">

      {/* Coupon */}

      <div className="pb-8 border-b">

        <button
          type="button"
          aria-expanded={isCouponOpen}
          aria-controls="coupon-form"
          onClick={() => setIsCouponOpen(!isCouponOpen)}
          className="
            w-full
            flex
            items-center
            justify-between
            text-[20px]
            cursor-pointer
          "
        >
          <span>Apply coupon</span>

          {isCouponOpen ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {isCouponOpen && (
          <form
            id="coupon-form"
            className="
              mt-8
              flex
              h-[50px]              
              rounded-full
              border
              border-neutral-300
              bg-white
              pl-6
              pr-0
            "
          >
            <input
              type="text"
              placeholder="Enter coupon code"
              className="
                min-w-0
                flex-1
                bg-transparent
                text-[16px]
                outline-none
                placeholder:text-neutral-400
              "
            />

            <button
              type="submit"
              className="
                h-[42px]
                rounded-full
                bg-black
                px-8
                text-[15px]
                font-medium
                text-white
                cursor-pointer
              "
            >
              Apply
            </button>
          </form>
        )}

      </div>

      {/* Gift Card */}

      <div className="py-8 border-b">

        <button
          type="button"
          aria-expanded={isGiftCardOpen}
          aria-controls="gift-card-form"
          onClick={() => setIsGiftCardOpen(!isGiftCardOpen)}
          className="
            w-full
            flex
            items-center
            justify-between
            text-[20px]
            cursor-pointer
          "
        >
          <span>Redeem gift card</span>

          {isGiftCardOpen ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {isGiftCardOpen && (
          <div id="gift-card-form">

            <div className="flex gap-4 mt-8">

              <input
                placeholder="* Enter gift card number"
                className="
                  flex-1
                  h-[54px]
                  rounded-full
                  border
                  px-6
                "
              />

              <input
                placeholder="* Enter Pin"
                className="
                  flex-1
                  h-[54px]
                  rounded-full
                  border
                  px-6
                "
              />

            </div>

            <button
              className="
                mt-8
                mx-auto
                block
                w-[330px]
                h-[54px]
                rounded-full
                border-2
                border-black
                font-medium
                cursor-pointer
              "
            >
              redeem gift card
            </button>

          </div>
        )}

      </div>

      {/* Order Summary */}

      <div className="pt-8">

        <h3
          className="
            text-[24px]
            font-medium
            mb-8
          "
        >
          Order summary
        </h3>

        <div className="flex justify-between mb-6">

          <span>
            Item totals ({itemCount} {itemCount === 1 ? "item" : "items"})
          </span>

          <span className="font-medium">
            {itemTotal}
          </span>

        </div>

        <div className="flex justify-between mb-10">

          <span>
            Shipping charges
          </span>

          <span className="text-neutral-500">
            Calculated at checkout
          </span>

        </div>

        <div className="border-t pt-8">

          <div className="flex justify-between">

            <div>

              <p className="font-medium">
                Grand total
              </p>

              <p className="text-sm text-neutral-500">
                inclusive of all taxes
              </p>

            </div>

            <p className="font-semibold text-xl">
              {grandTotal}
            </p>

          </div>

        </div>

        <button
          className="
            w-full
            h-[56px]
            bg-black
            text-white
            rounded-full
            mt-10
          "
        >
          proceed to checkout
        </button>

      </div>

    </div>
  );
}
