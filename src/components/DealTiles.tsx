import Link from "next/link";

const deals = [
  { title: "Top Deals", desc: "Our best offers", href: "#", color: "bg-blue-50" },
  { title: "Deal of the Day", desc: "Today only", href: "#", color: "bg-yellow-50" },
  { title: "Outlet", desc: "Clearance & open-box", href: "#", color: "bg-green-50" },
  { title: "Member Offers", desc: "Exclusive savings", href: "#", color: "bg-purple-50" },
];

export default function DealTiles() {
  return (
    <section>
      <div className="mx-auto container-max px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.map((d) => (
            <Link key={d.title} href={d.href} className={`${d.color} rounded-xl p-4 border hover:shadow-sm transition-shadow`}>
              <div className="font-semibold">{d.title}</div>
              <div className="text-sm text-zinc-600">{d.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}