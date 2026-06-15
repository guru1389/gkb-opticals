import Image from "next/image";

type FashionCardProps = {
  image: string;
};

export default function FashionCard({
  image,
}: FashionCardProps) {
  return (
    <div className="group bg-black rounded-[32px] p-6 overflow-hidden">

      <Image
        src={image}
        alt="fashion"
        width={320}
        height={620}
        className="w-full rounded-2xl transition duration-700 ease-out group-hover:scale-[1.02]"
        style={{
          height: "620px",
          objectFit: "cover",
        }}
      />

    </div>
  );
}