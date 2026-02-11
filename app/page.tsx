import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/typewriter";

export default function HomePage() {
  return (
    <div className="flex items-start justify-center min-h-screen pt-30">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">

        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-600 flex-shrink-0">
          <Image
            src="/image/Abdullah_Rifak.jpeg"
            alt="Abdullah"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 128px,
         (max-width: 768px) 160px,
         192px"
          />
        </div>

        {/* RIGHT SIDE: Text */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-4xl font-bold">Hi, I’m Abdullah</h1>
          <Typewriter />
          <p className="text-lg text-neutral-600">
            I’m passionate about building clean,
            <br className="hidden md:block" />
            scalable web applications with real-world constraints.
          </p>
          <div className="flex gap-4 mt-3 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link
              href="https://github.com/Abdullah-Rifak"
              target="_blank"
              className="px-5 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              GitHub
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}