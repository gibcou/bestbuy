import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto container-max px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-lg">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Big Savings on Tech You Love
              </h2>
              <p className="mt-3 text-blue-100">
                Shop laptops, TVs, appliances, phones and more with limited-time deals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#" className="inline-flex items-center rounded-full bg-white text-blue-700 px-5 py-3 text-sm font-semibold shadow hover:shadow-md">
                  Shop Deals
                </Link>
                <Link href="#" className="inline-flex items-center rounded-full bg-blue-700 text-white px-5 py-3 text-sm font-semibold shadow hover:shadow-md">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden bg-white border shadow-sm">
            <img src="window.svg" alt="Promo" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}