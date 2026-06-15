type BreadcrumbProps = {
  items: string[];
};

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-3 text-gray-500 text-sm">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-3"
        >
          <span>{item}</span>

          {index !== items.length - 1 && (
            <span>›</span>
          )}
        </div>
      ))}
    </div>
  );
}