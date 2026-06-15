import Image from "next/image";

type SeasonalCardProps = {
  title: string;
  image: string;
};

export default function SeasonalCard({
  title,
  image,
}: SeasonalCardProps) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden">

        <div className="relative h-[500px]">
            <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            />
        </div>

        <div className="py-8 text-center">
            <h3 className="text-[32px] font-light">
            {title}
            </h3>
        </div>

    </div>
  );
}