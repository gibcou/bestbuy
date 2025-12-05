import Link from "next/link";

const categories = [
  { name: "TV & Home Theater", icon: "globe.svg" },
  { name: "Computers & Tablets", icon: "window.svg" },
  { name: "Video Games", icon: "next.svg" },
  { name: "Cell Phones", icon: "vercel.svg" },
  { name: "Appliances", icon: "file.svg" },
  { name: "Audio", icon: "globe.svg" },
  { name: "Cameras", icon: "window.svg" },
  { name: "Wearable Tech", icon: "file.svg" },
];

export default function CategoryGrid() {
  return (
    <section>
      <div className="mx-auto container-max px-4 py-6">
        <h3 className="text-xl font-semibold mb-4">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link key={c.name} href="#" className="rounded-xl border p-4 flex items-center gap-3 bg-white hover:shadow-sm">
              <img src={c.icon} alt="" className="w-10 h-10" />
              <span className="text-sm font-medium">{c.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}