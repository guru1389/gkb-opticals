import ProductGallery from "../../components/pdp/product-gallery/ProductGallery";
import ProductInfo from "@/app/components/pdp/product-info/ProductInfo";
import ProductTabs from "@/app/components/pdp/product-tabs/ProductTabs";
import SimilarProducts from "@/app/components/pdp/similar-products/SimilarProducts";
import BrandProducts from "@/app/components/pdp/brand-products/BrandProducts";

export default function ProductPage() {
  return (
    <main className="bg-[#f7f7f7] min-h-screen">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          <ProductGallery />

          <ProductInfo />

        </div>

        <div className="mt-20">
    
          <ProductTabs />

        </div>

        <div className="mt-20">

          <SimilarProducts />

        </div>

        <div className="mt-20">

          <BrandProducts />

        </div>

      </div>

    </main>
  );
}
