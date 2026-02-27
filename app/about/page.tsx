import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const strengths = [
    {
      title: "Proven Delivery",
      text: "Experience building academic and freelance products from concept to deployment.",
    },
    {
      title: "Customer-Centric Approach",
      text: "I align technical choices with user behavior, business goals, and product outcomes.",
    },
    {
      title: "Future-Ready Engineering",
      text: "I focus on clean architecture and maintainable code to support long-term growth.",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto space-y-14">
        <section className="grid gap-8 md:grid-cols-2 items-center reveal-up">
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-brand">Who I Am</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">About Abdullah Rifak</h1>
            <p className="text-muted mt-4">
              Software Engineering undergraduate focused on full-stack development and actively pursuing internship
              opportunities in frontend, backend, and full-stack roles.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border border-border ring-2 ring-brand/25 shadow-sm bg-surface hover-lift">
              <Image
                src="/image/Abdullah_Rifak.jpeg"
                alt="Abdullah Rifak"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 192px, 240px"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-8 md:p-10 reveal-up delay-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Core Strengths</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {strengths.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-surface-soft p-5 hover-lift reveal-up"
                style={{ animationDelay: `${100 + index * 90}ms` }}
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 reveal-up delay-2">
          <article className="rounded-2xl border border-border bg-surface p-7 hover-lift">
            <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
            <p className="text-muted mb-4">Tools and technologies I frequently use in real projects.</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "MySQL",
                "Tailwind CSS",
                "Git",
                "Vercel",
              ].map((item, index) => (
                <span
                  key={item}
                  className="text-xs bg-surface-soft border border-border px-3 py-1.5 rounded-full badge-pop reveal-soft"
                  style={{ animationDelay: `${80 + index * 45}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-surface p-7 hover-lift">
            <h2 className="text-2xl font-bold mb-3">How I Work</h2>
            <ul className="space-y-3 text-sm text-muted list-disc pl-5">
              <li>Understand goals and user expectations first.</li>
              <li>Design clear flows before implementation.</li>
              <li>Build reusable, testable features iteratively.</li>
              <li>Deploy with performance and maintainability in mind.</li>
            </ul>
          </article>
        </section>

        <section className="rounded-2xl bg-brand p-8 md:p-10 text-white text-center reveal-soft delay-3">
          <h2 className="text-3xl font-bold">Let’s Build Something Meaningful</h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
            Looking for a developer ready for frontend, backend, and full-stack responsibilities? Let’s connect.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 px-6 py-3 rounded-md bg-white text-brand font-semibold hover:bg-blue-50"
          >
            Contact Me
          </Link>
        </section>
      </div>
    </main>
  );
}
