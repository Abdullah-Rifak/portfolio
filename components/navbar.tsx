import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Abdullah Rifak
        </Link>

        <div className="flex gap-6">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}