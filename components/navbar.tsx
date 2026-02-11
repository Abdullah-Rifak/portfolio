import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">
          Abdullah Rifak
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}