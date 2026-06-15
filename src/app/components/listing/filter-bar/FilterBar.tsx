import { SlidersHorizontal } from "lucide-react";

type FilterBarProps = {
  onOpen: () => void;
};

export default function FilterBar({
  onOpen,
}: FilterBarProps) {
  return (
    <div className="border-y border-gray-200 mt-8">

      <div className="px-6 py-4">

        <div className="flex justify-between items-center">

          {/* Gender Filter */}

          <button
            className="
              px-6
              py-2
              rounded-full
              border
              border-gray-300
              text-sm
              font-medium
              hover:border-black
              transition
            "
          >
            Male
          </button>

          {/* Sort & Filter */}

          <button
            type="button"
            onClick={onOpen}
            className="
              bg-black
              text-white
              rounded-full
              px-6
              py-2
              flex
              items-center
              gap-2
              text-sm
              font-medium
              hover:bg-white
              hover:text-black
              hover:border
              hover:border-black
              transition-all
              duration-300
            "
          >
            <SlidersHorizontal size={16} />

            <span>Sort & Filter</span>

          </button>

        </div>

      </div>

    </div>
  );
}