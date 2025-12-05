import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto container-max px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
              Big Savings on Tech You Love
            </h2>
            <p className="mt-3 text-zinc-600">
              Shop laptops, TVs, appliances, phones and more with limited-time deals.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="#" className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium">
                Shop Deals
              </Link>
              <Link href="#" className="inline-flex items-center rounded-full bg-zinc-200 text-black px-5 py-3 text-sm font-medium">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden bg-white border">
            {/* Simple illustrative banner using public SVG */}
            <img src="/window.svg" alt="Promo" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}