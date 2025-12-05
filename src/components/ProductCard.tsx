// Use plain <img> for GitHub Pages static export compatibility

type Props = {
  title: string;
  price: string;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className="rounded-xl border bg-white p-3 hover:shadow-sm transition-shadow">
      <div className="relative w-full h-40 bg-zinc-50 rounded-md overflow-hidden flex items-center justify-center">
        {/* Relative path so assets load under /bestbuy on GitHub Pages */}
        <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="mt-3 text-sm font-medium line-clamp-2">{title}</div>
      <div className="mt-1 text-lg font-bold">{price}</div>
      <button className="mt-3 w-full rounded-full bg-black text-white px-4 py-2 text-sm font-medium">
        Add to Cart
      </button>
    </div>
  );
}