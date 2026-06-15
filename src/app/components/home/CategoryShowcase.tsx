import CategoryCard from "./CategoryCard";

import { categories } from "./categoryData";

export default function CategoryShowcase() {
  return (
    <section className="py-24">

      <div className="max-w-8xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
            />
          ))}

        </div>

      </div>

    </section>
  );
}