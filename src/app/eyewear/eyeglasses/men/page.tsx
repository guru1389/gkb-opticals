"use client";

import { useState } from "react";

import PageHeader from "@/app/components/listing/page-header/PageHeader";
import FilterBar from "@/app/components/listing/filter-bar/FilterBar";
import ProductGrid from "@/app/components/listing/product-grid/ProductGrid";
import FilterDrawer from "@/app/components/listing/filter-drawer/FilterDrawer";

export default function MenPage() {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  return (
    <main className="bg-[#f7f7f7] min-h-screen">

        <div className="max-w-[1600px] mx-auto">

            <PageHeader
            title="Men"
            totalProducts={1858}
            />

            <FilterBar
            onOpen={() => setIsFilterDrawerOpen(true)}
            />

            <ProductGrid />

        </div>

        <FilterDrawer
            isOpen={isFilterDrawerOpen}
            onClose={() => setIsFilterDrawerOpen(false)}
        />

    </main>
  );
}