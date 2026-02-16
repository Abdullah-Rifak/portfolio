"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Java Servlets", "PHP","C#"]
  },
  {
    category: "Database",
    items: ["MongoDB","MySql"]
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "Vercel", "EmailJS","Postman","Figma"]
  }
];
  return (
  <div className="min-h-screen">

    {/* HERO SECTION */}
    <section className="pt-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-600">
          <Image
            src="/image/Abdullah_Rifak.jpeg"
            alt="Abdullah"
            fill
            className="object-cover"
            priority
            sizes="w-56 h-56 md:w-64 md:h-64"
          />
        </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">Hi, I’m Abdullah</h1>
          <Typewriter />

          <p className="text-lg text-neutral-600">
            I’m passionate about building clean,
            scalable web applications with real-world constraints.
          </p>
          <div className="flex gap-6 mt-6 justify-center md:justify-start text-xl">

          <a
            href="https://github.com/Abdullah-Rifak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="mailto:your-email@example.com"
            className="text-neutral-600 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

        </div>

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
              rel="noopener noreferrer"
              className="px-5 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              GitHub
            </Link>
          </div>
        </div>

      </div>
    </section>

    {/* SKILLS SECTION */}
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Technical Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {skills.map((group, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-4">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
    {/* Fatured Projects Section */}
    <section className="py-18 px-6">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            LAN POS System
          </h3>
          <p className="text-sm text-neutral-500 mb-3">
            Freelance • Full Stack
          </p>
          <p className="text-neutral-600 text-sm mb-4">
            Local network grocery POS with MongoDB and supplier tracking.
          </p>
          <Link
            href="/projects"
            className="text-blue-600 font-medium hover:underline"
          >
            View Details →
          </Link>
      </div>

      {/* Card 2 */}
      <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">
          Eco Harvest
        </h3>
        <p className="text-sm text-neutral-500 mb-3">
          Academic • Full Stack
        </p>
        <p className="text-neutral-600 text-sm mb-4">
          Role-based discount management system using MERN stack.
        </p>
        <Link
          href="/projects"
          className="text-blue-600 font-medium hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>

    <div className="text-center mt-12">
      <Link
        href="/projects"
        className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
      >
        View All Projects
      </Link>
    </div>
  </div>
</section>

<section className="py-24 bg-neutral-50">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-2xl font-bold mb-6">
      Let’s Work Together
    </h2>

    <p className="text-neutral-600 mb-8">
      I’m open to internship and freelance opportunities.  
      Feel free to reach out.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mb-8">
      <a
        href="mailto:abdullahrifak522@gmail.com"
        className="text-blue-600 font-medium hover:underline"
      >
        Email
      </a>

      <a
        href="https://github.com/Abdullah-Rifak"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium hover:underline"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium hover:underline"
      >
        LinkedIn
      </a>
    </div>

    <a
      href="mailto:your-email@example.com"
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Get In Touch
    </a>

  </div>
</section>


  </div>
);

}