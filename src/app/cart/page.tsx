import CartItem from "@/app/components/cart/CartItem";
import CartSummary from "@/app/components/cart/CartSummary";

const cartItems = [
  {
    id: "longines-lg0005",
    name: "Longines LG0005-H Sunglass Gold Male Metal Metal",
    price: "₹43,250",
    image: "/images/cart/LO5GL59.webp",
    attributes: [
      {
        label: "Prescription Type",
        value: "Zero Power Tinted",
      },
      {
        label: "Light Protection No Power",
        value: "Sunlenses",
      },
      {
        label: "Color Sg",
        value: "BROWN 75%",
      },
    ],
  },
  {
    id: "paul-vosheront-pv603",
    name: "PAUL VOSHERONT PV603 Frame Gold",
    price: "₹12,500",
    image: "/images/products/KCA.webp",
    attributes: [
      {
        label: "Prescription Type",
        value: "Single Vision",
      },
      {
        label: "Frame Material",
        value: "Metal",
      },
      {
        label: "Frame Color",
        value: "Gold",
      },
    ],
  },
  {
    id: "paul-vosheront-pv3635f",
    name: "PAUL VOSHERONT PV3635F Frame Black",
    price: "₹12,500",
    image: "/images/products/KCA1.webp",
    attributes: [
      {
        label: "Prescription Type",
        value: "Single Vision",
      },
      {
        label: "Frame Material",
        value: "Shell",
      },
      {
        label: "Frame Color",
        value: "Black",
      },
    ],
  },
];

export default function CartPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-8 py-20">

      <h1
        className="
          text-black 
          font-avenir 
          text-[28px] 
          lg:text-[3rem] 
          font-light 
          leading-normal
        "
      >
        your cart
      </h1>

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-2
          lg:grid-cols-2
          gap-16
        "
      >
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              attributes={item.attributes}
            />
          ))}
        </div>

        <CartSummary
          itemCount={cartItems.length}
          itemTotal="₹68,250"
          grandTotal="₹68,250"
        />

      </div>

    </main>
  );
}
