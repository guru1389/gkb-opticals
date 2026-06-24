"use client";

import { useState } from "react";
import {
  Phone,
  ShieldCheck,
  ChevronLeft,
  Check,
  CreditCard,
  Landmark,
  PackageCheck,
  Smartphone,
} from "lucide-react";

type Step = "guest" | "shipping" | "payment" | "confirmation";
type PaymentMethod = "card" | "upi" | "netbanking" | "cod";

const STEP_ORDER: Step[] = ["guest", "shipping", "payment", "confirmation"];

const STEPPER_STEPS = [
  { id: "shipping", label: "Shipping information" },
  { id: "payment", label: "Payment details" },
  { id: "confirmation", label: "Order confirmation" },
];

const PAYMENT_METHODS = [
  { id: "card" as const, label: "Card", Icon: CreditCard },
  { id: "upi" as const, label: "UPI", Icon: Smartphone },
  { id: "netbanking" as const, label: "Net banking", Icon: Landmark },
  { id: "cod" as const, label: "Cash on delivery", Icon: PackageCheck },
];

const pillInput =
  "w-full h-[50px] rounded-full border border-neutral-300 bg-white px-5 text-[14px] text-neutral-700 outline-none focus:border-neutral-600 placeholder:text-neutral-400 transition-colors";

const darkBtn =
  "w-full h-[50px] rounded-full bg-[#4d4d4d] text-white text-[13px] font-medium tracking-wide hover:bg-[#333] transition-colors";

function Stepper({ current }: { current: Step }) {
  const activeIndex =
    current === "guest"
      ? -1
      : STEPPER_STEPS.findIndex((s) => s.id === current);

  return (
    <div className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-[900px] items-start justify-between px-6 py-6">
        {STEPPER_STEPS.map((s, i) => {
          const isDone = activeIndex > i;
          const isActive = activeIndex === i;

          return (
            <div key={s.id} className="flex flex-1 flex-col items-center">
              <div className="relative flex w-full items-center">
                {i > 0 && (
                  <div
                    className={`h-px flex-1 ${isDone || isActive ? "bg-neutral-400" : "bg-neutral-300"}`}
                  />
                )}
                <div
                  className={`h-3 w-3 shrink-0 rounded-full border ${
                    isActive || isDone
                      ? "border-neutral-600 bg-neutral-600"
                      : "border-neutral-400 bg-transparent"
                  }`}
                />
                {i < STEPPER_STEPS.length - 1 && (
                  <div
                    className={`h-px flex-1 ${isDone ? "bg-neutral-400" : "bg-neutral-300"}`}
                  />
                )}
              </div>
              <span className="mt-2 text-center text-[11px] text-neutral-500">
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <aside className="bg-white p-6 lg:sticky lg:top-4">
      <div className="mb-4 flex items-center justify-between text-[14px]">
        <span className="text-neutral-600">Item totals (1 item)</span>
        <span className="font-medium">₹4,920</span>
      </div>

      <hr className="border-neutral-200" />

      <div className="mb-6 mt-4 flex items-center justify-between">
        <span className="text-[15px] font-bold">Grand total</span>
        <span className="text-[15px] font-bold">₹4,920</span>
      </div>

      <hr className="border-neutral-200" />

      <div className="mt-6 flex justify-around">
        <div className="flex flex-col items-center gap-2">
          <Phone size={22} className="text-neutral-500" strokeWidth={1.5} />
          <span className="text-[12px] text-neutral-500">Expert callback</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ShieldCheck size={22} className="text-neutral-500" strokeWidth={1.5} />
          <span className="text-[12px] text-neutral-500">1-year warranty</span>
        </div>
      </div>
    </aside>
  );
}

export default function CheckoutFlow() {
  const [step, setStep] = useState<Step>("guest");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const goBack = () => {
    const idx = STEP_ORDER.indexOf(step);
    if (idx > 0) setStep(STEP_ORDER[idx - 1]);
  };

  const goNext = () => {
    const idx = STEP_ORDER.indexOf(step);
    if (idx < STEP_ORDER.length - 1) setStep(STEP_ORDER[idx + 1]);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Stepper current={step} />

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 px-4 py-8 lg:grid-cols-[1fr_320px] lg:items-start">
        {/* Left Panel */}
        <div className="bg-white p-8">
          {/* Guest / Login Step */}
          {step === "guest" && (
            <div>
              <button
                onClick={() => window.history.back()}
                className="mb-6 text-neutral-500 hover:text-black"
              >
                <ChevronLeft size={22} />
              </button>

              <h2 className="mb-1 text-[20px] font-semibold text-neutral-800">
                Login or checkout as a guest
              </h2>
              <p className="mb-6 text-[13px] text-neutral-500">
                Enter your details to proceed with the purchase
              </p>

              <input
                className={`${pillInput} mb-5`}
                placeholder="* Email address / Phone number"
                type="text"
              />

              <div className="flex flex-col gap-3">
                <button className={darkBtn} onClick={goNext}>
                  proceed to checkout
                </button>
                <button className={darkBtn} onClick={() => setStep("shipping")}>
                  proceed as guest
                </button>
              </div>
            </div>
          )}

          {/* Shipping Step */}
          {step === "shipping" && (
            <div>
              <button
                onClick={goBack}
                className="mb-6 text-neutral-500 hover:text-black"
              >
                <ChevronLeft size={22} />
              </button>

              <h2 className="mb-6 text-[20px] font-semibold text-neutral-800">
                Shipping information
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input className={pillInput} placeholder="First name" type="text" />
                <input className={pillInput} placeholder="Last name" type="text" />
                <input
                  className={pillInput}
                  placeholder="Email address"
                  type="email"
                />
                <input
                  className={pillInput}
                  placeholder="Mobile number"
                  type="tel"
                />
                <input
                  className={`${pillInput} md:col-span-2`}
                  placeholder="Address line 1"
                  type="text"
                />
                <input className={pillInput} placeholder="City" type="text" />
                <input className={pillInput} placeholder="PIN code" type="text" />
              </div>

              <button className={`${darkBtn} mt-6`} onClick={goNext}>
                continue to payment
              </button>
            </div>
          )}

          {/* Payment Step */}
          {step === "payment" && (
            <div>
              <button
                onClick={goBack}
                className="mb-6 text-neutral-500 hover:text-black"
              >
                <ChevronLeft size={22} />
              </button>

              <h2 className="mb-6 text-[20px] font-semibold text-neutral-800">
                Payment details
              </h2>

              {/* Payment method tabs */}
              <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                {PAYMENT_METHODS.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => setPaymentMethod(id)}
                    className={`flex h-[72px] flex-col items-center justify-center gap-2 rounded border text-[12px] transition-colors ${
                      paymentMethod === id
                        ? "border-neutral-700 bg-neutral-700 text-white"
                        : "border-neutral-300 text-neutral-600 hover:border-neutral-500"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {paymentMethod === "card" && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    className={`${pillInput} md:col-span-2`}
                    placeholder="Card number"
                    type="text"
                    maxLength={19}
                  />
                  <input className={pillInput} placeholder="MM / YY" type="text" />
                  <input
                    className={pillInput}
                    placeholder="CVV"
                    type="password"
                    maxLength={4}
                  />
                  <input
                    className={`${pillInput} md:col-span-2`}
                    placeholder="Name on card"
                    type="text"
                  />
                </div>
              )}

              {paymentMethod === "upi" && (
                <input
                  className={pillInput}
                  placeholder="Enter UPI ID (e.g. name@upi)"
                  type="text"
                />
              )}

              {paymentMethod === "netbanking" && (
                <select className={pillInput}>
                  <option value="">Select your bank</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>State Bank of India</option>
                  <option>Axis Bank</option>
                  <option>Kotak Mahindra Bank</option>
                </select>
              )}

              {paymentMethod === "cod" && (
                <div className="rounded-full border border-neutral-300 px-6 py-4 text-[13px] text-neutral-600">
                  Pay by cash when your order is delivered.
                </div>
              )}

              <button className={`${darkBtn} mt-6`} onClick={goNext}>
                place order
              </button>
            </div>
          )}

          {/* Confirmation Step */}
          {step === "confirmation" && (
            <div className="py-10 text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                <Check size={24} />
              </div>

              <p className="mb-3 text-[11px] uppercase tracking-widest text-neutral-400">
                Order confirmed
              </p>

              <h2 className="mx-auto max-w-[420px] text-[28px] font-light leading-snug text-neutral-800">
                Thank you, your order has been placed.
              </h2>

              <p className="mx-auto mt-4 max-w-[400px] text-[13px] text-neutral-500">
                We&apos;ve sent the confirmation details to your email. Estimated
                delivery: 5–7 business days.
              </p>

              <div className="mx-auto mt-8 grid max-w-[480px] grid-cols-3 gap-4 text-left">
                {[
                  { label: "Order ID", value: "GKB-24051" },
                  { label: "Payment", value: "Confirmed" },
                  { label: "Total", value: "₹4,920" },
                ].map(({ label, value }) => (
                  <div key={label} className="border-t border-neutral-200 pt-4">
                    <p className="text-[11px] uppercase tracking-wider text-neutral-400">
                      {label}
                    </p>
                    <p className="mt-2 text-[14px] font-medium">{value}</p>
                  </div>
                ))}
              </div>

              <button
                className="mt-10 h-[50px] rounded-full bg-black px-10 text-[13px] font-medium text-white transition-colors hover:bg-neutral-800"
                onClick={() => setStep("guest")}
              >
                continue shopping
              </button>
            </div>
          )}
        </div>

        {/* Right Panel */}
        <OrderSummary />
      </div>
    </div>
  );
}