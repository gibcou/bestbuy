"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="brand-header text-white header-shadow">
      <div className="mx-auto container-max px-4">
        <div className="flex items-center gap-4 py-3">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center brand-tag text-black rounded-sm px-2 py-1 font-bold">
              {/* Simple price tag icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7l8-4 10 10-8 8L3 7z" fill="#ffcc00" />
                <circle cx="11" cy="9" r="2" fill="#000000" />
              </svg>
            </span>
            <span className="text-xl font-extrabold tracking-tight">BesBuy</span>
          </Link>

          {/* Search */}
          <div className="flex-1">
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 text-black outline-none"
                placeholder="Search products, brands and categories"
              />
              <button
                className="px-4 py-2 text-black font-medium bg-zinc-100 hover:bg-zinc-200"
                aria-label="Search"
              >
                🔎
              </button>
            </div>
          </div>

          {/* Actions */}
          <nav className="flex items-center gap-4 text-sm">
            <Link href="#" className="hover:underline">
              Sign In
            </Link>
            <Link href="#" className="hover:underline">
              Orders
            </Link>
            <Link href="#" className="relative hover:underline">
              Cart
              <span className="absolute -top-2 -right-3 bg-white text-black rounded-full text-xs px-1">0</span>
            </Link>
          </nav>
        </div>

        {/* Secondary nav */}
        <div className="flex items-center gap-6 text-sm py-2">
          <Link href="#" className="hover:underline">
            Top Deals
          </Link>
          <Link href="#" className="hover:underline">
            Deal of the Day
          </Link>
          <Link href="#" className="hover:underline">
            Totaltech
          </Link>
          <Link href="#" className="hover:underline">
            Credit Cards
          </Link>
          <Link href="#" className="hover:underline">
            Gift Cards
          </Link>
          <Link href="#" className="hover:underline">
            More
          </Link>
        </div>
      </div>
    </header>
  );
}