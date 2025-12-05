import Hero from "@/components/Hero";
import DealTiles from "@/components/DealTiles";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";

const products = [
  { title: "4K UHD Smart TV — 55\"", price: "$399.99", image: "/next.svg" },
  { title: "Gaming Laptop — RTX Graphics", price: "$1,199.99", image: "/vercel.svg" },
  { title: "Noise-Canceling Headphones", price: "$249.99", image: "/globe.svg" },
  { title: "Smartphone — 128GB", price: "$699.99", image: "/window.svg" },
  { title: "Stainless Steel Dishwasher", price: "$549.99", image: "/file.svg" },
  { title: "Mirrorless Camera Kit", price: "$899.99", image: "/globe.svg" },
];

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <DealTiles />
      <CategoryGrid />

      <section>
        <div className="mx-auto container-max px-4 py-6">
          <h3 className="text-xl font-semibold mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((p) => (
              <ProductCard key={p.title} title={p.title} price={p.price} image={p.image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
