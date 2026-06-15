import ProductCard from "../../home/ProductCard";
import { products } from "./productData";

export default function ProductGrid() {
  return (
    <section className="px-4 md:px-8 lg:px-12 xl:px-20 py-10">

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          xl:grid-cols-3
          gap-8
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

    </section>
  );
}