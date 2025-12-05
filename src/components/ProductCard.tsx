// Use plain <img> for GitHub Pages static export compatibility

type Props = {
  title: string;
  price: string;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 hover:shadow-lg transition-transform hover:-translate-y-0.5">
      <div className="relative w-full h-40 bg-zinc-50 rounded-lg overflow-hidden flex items-center justify-center">
        {/* Relative path so assets load under /bestbuy on GitHub Pages */}
        <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="mt-3 text-sm font-semibold text-zinc-900 line-clamp-2">{title}</div>
      <div className="mt-1 text-lg font-bold text-blue-700">{price}</div>
      <button className="mt-3 w-full rounded-full bg-blue-700 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-800">
        Add to Cart
      </button>
    </div>
  );
}