type FooterColumnProps = {
  title: string;
  links: string[];
};

export default function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-white text-2xl mb-8">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li
            key={link}
            className="text-gray-300 hover:text-white cursor-pointer transition"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}