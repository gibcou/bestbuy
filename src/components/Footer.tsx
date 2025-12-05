import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-zinc-700 mt-16">
      <div className="mx-auto container-max px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:underline">Help Center</Link></li>
              <li><Link href="#" className="hover:underline">Order Status</Link></li>
              <li><Link href="#" className="hover:underline">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:underline">BesBuy Home</Link></li>
              <li><Link href="#" className="hover:underline">Trade-In</Link></li>
              <li><Link href="#" className="hover:underline">Gift Cards</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Corporate Info</Link></li>
              <li><Link href="#" className="hover:underline">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Policies</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:underline">Privacy</Link></li>
              <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:underline">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-zinc-500 mt-6">
          <p>
            © {new Date().getFullYear()} BesBuy. This is a demo site inspired by retail layouts.
          </p>
        </div>
      </div>
    </footer>
  );
}