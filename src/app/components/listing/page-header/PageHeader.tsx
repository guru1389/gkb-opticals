import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeaderProps = {
  title: string;
  totalProducts: number;
};

export default function PageHeader({
  title,
  totalProducts,
}: PageHeaderProps) {
  return (
    <div className="bg-[#f5f5f5] px-4 md:px-8 lg:px-12 xl:px-20 pt-8 lg:pt-14 pb-8 lg:pb-14">

      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="flex items-center gap-2 text-xs lg:text-sm text-neutral-500 mb-6 lg:mb-10"
      >
        <Link
          href="/"
          className="hover:text-black transition-colors"
        >
          Home
        </Link>

        <ChevronRight className="w-3.5 h-3.5" />

        <span className="text-black font-medium truncate max-w-[60vw] lg:max-w-none">
          {title}
        </span>
      </nav>

      {/* Title + Product Count */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">

        <div className="flex-1 min-w-0">
          <h1 className="text-black text-[32px] leading-tight lg:text-[56px] lg:leading-[1.05] font-light tracking-tight">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-3 lg:pb-2">

          <div className="hidden lg:block h-px w-10 bg-black/20" />

          <span className="text-sm lg:text-base text-neutral-600">
            {totalProducts} products
          </span>

        </div>

      </div>

    </div>
  );
}