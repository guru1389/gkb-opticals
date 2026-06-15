"use client";

import { X } from "lucide-react";
import { filterSections } from "./filterData";

type FilterDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function FilterDrawer({
  isOpen,
  onClose,
}: FilterDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[9998]"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="
          fixed
          top-0
          right-0
          h-screen
          w-[560px]
          max-w-[90vw]
          bg-white
          z-[9999]
          flex
          flex-col
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b">
          <h2 className="text-[24px] font-semibold">
            Sort & Filter
          </h2>

          <button
            onClick={onClose}
            className="
              w-10
              h-10
              rounded-full
              border
              flex
              items-center
              justify-center
              hover:bg-gray-100
              transition
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">

          {/* Left Menu */}
          <div
            className="
              w-[170px]
              border-r
              bg-[#f8f8f8]
              overflow-y-auto
            "
          >
            {filterSections.map((section, index) => (
              <button
                key={section}
                className={`
                  w-full
                  text-left
                  px-6
                  py-5
                  border-b
                  text-sm
                  transition
                  ${
                    index === 0
                      ? "bg-white font-semibold"
                      : "hover:bg-white"
                  }
                `}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="flex-1 overflow-y-auto p-8">

            <div className="space-y-6">

              <div
                className="
                  border
                  rounded-2xl
                  p-6
                  flex
                  justify-between
                  items-center
                  cursor-pointer
                "
              >
                <span className="text-base">
                  Price (high to low)
                </span>

                <div className="w-6 h-6 rounded-full border" />
              </div>

              <div
                className="
                  border
                  rounded-2xl
                  p-6
                  flex
                  justify-between
                  items-center
                  cursor-pointer
                "
              >
                <span className="text-base">
                  Price (low to high)
                </span>

                <div className="w-6 h-6 rounded-full border" />
              </div>

            </div>

          </div>

        </div>

        {/* Footer */}
        <div
          className="
            border-t
            p-6
            flex
            gap-4
            bg-white
          "
        >
          <button
            className="
              px-8
              py-3
              rounded-full
              border
              border-gray-300
              hover:border-black
              transition
            "
          >
            Reset All
          </button>

          <button
            className="
              flex-1
              py-3
              rounded-full
              bg-black
              text-white
              hover:bg-neutral-800
              transition
            "
          >
            Apply
          </button>

        </div>

      </div>
    </>
  );
}