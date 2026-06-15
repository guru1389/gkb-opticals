"use client";

import Image from "next/image";
import {
  Check,
  CreditCard,
  Landmark,
  MapPin,
  PackageCheck,
  Smartphone,
  Truck,
} from "lucide-react";
import { useState } from "react";

type CheckoutStep = "shipping" | "payment" | "confirmation";
type ShippingTab = "delivery" | "pickup";
type PaymentTab = "card" | "upi" | "netbanking" | "cod";

const steps: {
  id: CheckoutStep;
  label: string;
}[] = [
  {
    id: "shipping",
    label: "Shipping information",
  },
  {
    id: "payment",
    label: "Payment",
  },
  {
    id: "confirmation",
    label: "Order confirmation",
  },
];

const orderItems = [
  {
    id: "longines-lg0005",
    name: "Longines LG0005-H Sunglass Gold",
    price: "₹43,250",
    image: "/images/cart/LO5GL59.webp",
  },
  {
    id: "paul-vosheront-pv603",
    name: "PAUL VOSHERONT PV603 Frame Gold",
    price: "₹12,500",
    image: "/images/products/KCA.webp",
  },
  {
    id: "paul-vosheront-pv3635f",
    name: "PAUL VOSHERONT PV3635F Frame Black",
    price: "₹12,500",
    image: "/images/products/KCA1.webp",
  },
];

const paymentTabs: {
  id: PaymentTab;
  label: string;
  icon: React.ElementType;
}[] = [
  {
    id: "card",
    label: "Card",
    icon: CreditCard,
  },
  {
    id: "upi",
    label: "UPI",
    icon: Smartphone,
  },
  {
    id: "netbanking",
    label: "Net banking",
    icon: Landmark,
  },
  {
    id: "cod",
    label: "Cash on delivery",
    icon: PackageCheck,
  },
];

const inputClassName =
  "h-[54px] rounded-full border border-neutral-300 bg-white px-5 text-[15px] outline-none transition focus:border-black";

export default function CheckoutFlow() {
  const [activeStep, setActiveStep] = useState<CheckoutStep>("shipping");
  const [shippingTab, setShippingTab] = useState<ShippingTab>("delivery");
  const [paymentTab, setPaymentTab] = useState<PaymentTab>("card");

  const goToPayment = () => {
    setActiveStep("payment");
  };

  const placeOrder = () => {
    setActiveStep("confirmation");
  };

  return (
    <main className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-20">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-neutral-500">
              Secure checkout
            </p>

            <h1 className="font-avenir text-[36px] font-light leading-tight text-black lg:text-[52px]">
              checkout
            </h1>
          </div>

          <div className="grid grid-cols-3 rounded-full border border-neutral-300 bg-white p-1">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`
                    flex
                    h-[44px]
                    min-w-0
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    px-4
                    text-center
                    text-[13px]
                    font-medium
                    transition
                    ${
                      isActive
                        ? "bg-black text-white"
                        : "text-neutral-500 hover:text-black"
                    }
                  `}
                >
                  <span className="hidden h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[11px] sm:flex">
                    {index + 1}
                  </span>
                  <span className="truncate">{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <section className="border-t border-neutral-200 bg-white px-6 py-8 lg:px-8">
            {activeStep === "shipping" && (
              <div>
                <div className="mb-8 flex items-center justify-between gap-6">
                  <div>
                    <h2 className="text-[26px] font-medium">
                      Shipping information
                    </h2>
                    <p className="mt-2 text-sm text-neutral-500">
                      Choose delivery or collect from a nearby store.
                    </p>
                  </div>

                  <Truck className="hidden text-neutral-400 sm:block" size={28} />
                </div>

                <div className="mb-8 grid grid-cols-2 rounded-full border border-neutral-300 p-1">
                  <button
                    type="button"
                    onClick={() => setShippingTab("delivery")}
                    className={`
                      h-[44px]
                      rounded-full
                      text-sm
                      font-medium
                      transition
                      ${
                        shippingTab === "delivery"
                          ? "bg-black text-white"
                          : "text-neutral-500 hover:text-black"
                      }
                    `}
                  >
                    Home delivery
                  </button>

                  <button
                    type="button"
                    onClick={() => setShippingTab("pickup")}
                    className={`
                      h-[44px]
                      rounded-full
                      text-sm
                      font-medium
                      transition
                      ${
                        shippingTab === "pickup"
                          ? "bg-black text-white"
                          : "text-neutral-500 hover:text-black"
                      }
                    `}
                  >
                    Store pickup
                  </button>
                </div>

                {shippingTab === "delivery" ? (
                  <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <input
                      className={inputClassName}
                      placeholder="First name"
                      type="text"
                    />
                    <input
                      className={inputClassName}
                      placeholder="Last name"
                      type="text"
                    />
                    <input
                      className={inputClassName}
                      placeholder="Email address"
                      type="email"
                    />
                    <input
                      className={inputClassName}
                      placeholder="Mobile number"
                      type="tel"
                    />
                    <input
                      className={`${inputClassName} md:col-span-2`}
                      placeholder="Address line 1"
                      type="text"
                    />
                    <input
                      className={inputClassName}
                      placeholder="City"
                      type="text"
                    />
                    <input
                      className={inputClassName}
                      placeholder="PIN code"
                      type="text"
                    />
                  </form>
                ) : (
                  <div className="space-y-4">
                    {["Park Street, Kolkata", "Indiranagar, Bengaluru"].map(
                      (store) => (
                        <button
                          key={store}
                          type="button"
                          className="flex w-full items-center gap-4 rounded-full border border-neutral-300 bg-white px-5 py-4 text-left transition hover:border-black"
                        >
                          <MapPin size={18} />
                          <span className="font-medium">{store}</span>
                        </button>
                      )
                    )}
                  </div>
                )}

                <button
                  type="button"
                  onClick={goToPayment}
                  className="mt-8 h-[54px] rounded-full bg-black px-10 font-medium text-white transition hover:bg-neutral-800"
                >
                  continue to payment
                </button>
              </div>
            )}

            {activeStep === "payment" && (
              <div>
                <div className="mb-8">
                  <h2 className="text-[26px] font-medium">Payment</h2>
                  <p className="mt-2 text-sm text-neutral-500">
                    Select a payment method and complete your order.
                  </p>
                </div>

                <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {paymentTabs.map((tab) => {
                    const Icon = tab.icon;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setPaymentTab(tab.id)}
                        className={`
                          flex
                          h-[72px]
                          flex-col
                          items-center
                          justify-center
                          gap-2
                          rounded-[8px]
                          border
                          text-sm
                          transition
                          ${
                            paymentTab === tab.id
                              ? "border-black bg-black text-white"
                              : "border-neutral-300 bg-white text-neutral-600 hover:border-black hover:text-black"
                          }
                        `}
                      >
                        <Icon size={18} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {paymentTab === "card" && (
                  <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <input
                      className={`${inputClassName} md:col-span-2`}
                      placeholder="Card number"
                      type="text"
                    />
                    <input
                      className={inputClassName}
                      placeholder="MM / YY"
                      type="text"
                    />
                    <input
                      className={inputClassName}
                      placeholder="CVV"
                      type="password"
                    />
                    <input
                      className={`${inputClassName} md:col-span-2`}
                      placeholder="Name on card"
                      type="text"
                    />
                  </form>
                )}

                {paymentTab === "upi" && (
                  <input
                    className={`${inputClassName} w-full`}
                    placeholder="Enter UPI ID"
                    type="text"
                  />
                )}

                {paymentTab === "netbanking" && (
                  <select className={`${inputClassName} w-full`}>
                    <option>Select bank</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India</option>
                    <option>Axis Bank</option>
                  </select>
                )}

                {paymentTab === "cod" && (
                  <div className="rounded-[8px] border border-neutral-300 bg-white p-5 text-sm text-neutral-600">
                    Pay by cash when your order is delivered.
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setActiveStep("shipping")}
                    className="h-[54px] rounded-full border border-black px-10 font-medium transition hover:bg-black hover:text-white"
                  >
                    back
                  </button>

                  <button
                    type="button"
                    onClick={placeOrder}
                    className="h-[54px] rounded-full bg-black px-10 font-medium text-white transition hover:bg-neutral-800"
                  >
                    place order
                  </button>
                </div>
              </div>
            )}

            {activeStep === "confirmation" && (
              <div className="py-10 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                  <Check size={28} />
                </div>

                <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                  Order confirmed
                </p>

                <h2 className="mx-auto max-w-[520px] text-[34px] font-light leading-tight">
                  Thank you, your order has been placed.
                </h2>

                <p className="mx-auto mt-5 max-w-[520px] text-neutral-600">
                  We have sent the confirmation details to your email. Your
                  estimated delivery window is 5-7 business days.
                </p>

                <div className="mx-auto mt-8 grid max-w-[560px] grid-cols-1 gap-4 text-left sm:grid-cols-3">
                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                      Order ID
                    </p>
                    <p className="mt-2 font-medium">GKB-24051</p>
                  </div>

                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                      Payment
                    </p>
                    <p className="mt-2 font-medium">Confirmed</p>
                  </div>

                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                      Total
                    </p>
                    <p className="mt-2 font-medium">₹68,250</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          <aside className="border-t border-neutral-200 bg-white px-6 py-8 lg:sticky lg:top-[120px]">
            <h2 className="mb-6 text-[24px] font-medium">Order summary</h2>

            <div className="space-y-5">
              {orderItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={72}
                    height={72}
                    sizes="72px"
                    className="h-[72px] w-[72px] shrink-0 object-contain"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-5">{item.name}</p>
                    <p className="mt-2 text-sm text-neutral-500">Qty 1</p>
                  </div>

                  <p className="text-sm font-medium">{item.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-neutral-200 pt-6 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Item total</span>
                <span className="font-medium">₹68,250</span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-500">Shipping</span>
                <span className="font-medium">Free</span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-500">Taxes</span>
                <span className="font-medium">Included</span>
              </div>
            </div>

            <div className="mt-6 flex justify-between border-t border-neutral-200 pt-6 text-[20px] font-semibold">
              <span>Grand total</span>
              <span>₹68,250</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
