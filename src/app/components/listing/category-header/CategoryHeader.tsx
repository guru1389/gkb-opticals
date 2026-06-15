type CategoryHeaderProps = {
  title: string;
  totalProducts: number;
};

export default function CategoryHeader({
  title,
  totalProducts,
}: CategoryHeaderProps) {
  return (
    <div className="flex justify-between items-center mt-12">

      <h1 className="text-[72px] font-light">
        {title}
      </h1>

      <div className="flex items-center gap-4">

        <div className="w-10 h-[1px] bg-gray-300" />

        <span className="text-gray-500">
          {totalProducts} products
        </span>

      </div>

    </div>
  );
}