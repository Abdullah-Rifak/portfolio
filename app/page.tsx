"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/typewriter";
import CountUp from "@/components/count-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  const roleHighlights = [
    "Ready for Full-Stack, Frontend, and Backend engineering roles",
    "Hands-on project delivery using React, Next.js, Node.js, Express, and databases",
    "Strong focus on clean architecture, maintainable code, and product usability",
    "Open to internship and entry-level software engineering opportunities",
  ];

  const impactStats = [
    { label: "Projects Built", value: 5, suffix: "+" },
    { label: "Core Technologies", value: 12, suffix: "+" },
    { label: "Role Coverage", value: 3, suffix: " Roles" },
  ];

  const technicalSkills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "TypeScript"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "ASP.NET Core", "Entity Framework Core", "REST API", "PHP"],
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "Languages",
      items: ["JavaScript", "Java", "C", "C#"],
    },
    {
      category: "Tools & Cloud",
      items: ["Git", "GitHub", "Figma", "Postman", "Vercel", "AWS (In Progress)"],
    },
  ];

  const featuredProjects = [
    {
      title: "LAN POS System",
      type: "Freelance • Full Stack",
      description: "Local network grocery POS with MongoDB and supplier tracking.",
    },
    {
      title: "Eco Harvest",
      type: "Academic • Full Stack",
      description: "Role-based discount management system using MERN stack.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-16 h-60 w-60 rounded-full bg-surface-soft blur-3xl float-drift" />
      <div className="pointer-events-none absolute top-40 -right-16 h-72 w-72 rounded-full bg-brand/15 blur-3xl float-drift" />

      <section className="pt-18 md:pt-24 px-6 reveal-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center rounded-3xl border border-border bg-surface/70 backdrop-blur-sm p-8 md:p-10 shadow-[0_10px_40px_-24px_rgba(37,99,235,0.45)]">
          <div className="space-y-5 text-center md:text-left max-w-3xl md:max-w-none mx-auto md:mx-0">
            <p className="text-xs md:text-sm font-semibold tracking-[0.22em] text-brand uppercase">Professional Software Engineer Portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">I’m <span className="bg-gradient-to-r from-brand to-brand-strong bg-clip-text text-transparent">Abdullah Rifak</span>.</h1>

            <div className="flex justify-center md:hidden pt-1">
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-border ring-4 ring-brand/20 shadow-[0_0_0_10px_rgba(37,99,235,0.08)] bg-surface hover-lift">
                <Image
                  src="/image/Abdullah_Rifak.jpeg"
                  alt="Abdullah Rifak"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="176px"
                />
              </div>
            </div>

            <Typewriter />
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto md:mx-0">
              Software Engineering undergraduate seeking an internship to contribute across full-stack, frontend,
              and backend development while growing in a professional engineering team.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="text-xs px-3 py-1.5 rounded-full bg-surface-soft border border-border">Full-Stack Ready</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-surface-soft border border-border">Frontend Ready</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-surface-soft border border-border">Backend Ready</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <Link href="/projects" className="px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand-strong hover-lift shadow-sm">
                Explore Projects
              </Link>
              <Link
                href="/resume/Abdullah_Rifak_CV_Software_Engineer_Intern.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border bg-surface rounded-lg hover:bg-surface-soft hover-lift shadow-sm"
              >
                Download CV
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-border bg-surface rounded-lg hover:bg-surface-soft hover-lift shadow-sm">
                Hire Me
              </Link>
            </div>

            <div className="flex gap-6 pt-2 justify-center md:justify-start text-xl text-muted">
              <a href="https://github.com/Abdullah-Rifak" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-border bg-surface-soft grid place-items-center hover:text-brand hover-lift">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-rifak"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-border bg-surface-soft grid place-items-center hover:text-brand hover-lift"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:abdullahrifak522@gmail.com" className="h-10 w-10 rounded-full border border-border bg-surface-soft grid place-items-center hover:text-brand hover-lift">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-border bg-surface-soft grid place-items-center hover:text-brand hover-lift">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-border ring-4 ring-brand/20 shadow-[0_0_0_10px_rgba(37,99,235,0.08)] bg-surface hover-lift">
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
        </div>
      </section>

      <section className="py-8 px-6 reveal-up delay-1">
        <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-3">
          {impactStats.map((stat, index) => (
            <article
              key={stat.label}
              className="rounded-xl border border-border bg-gradient-to-br from-surface to-surface-soft/40 p-5 shadow-sm hover-lift reveal-up"
              style={{ animationDelay: `${80 + index * 90}ms` }}
            >
              <p className="text-xs font-semibold tracking-wider uppercase text-brand">{stat.label}</p>
              <p className="text-2xl font-bold mt-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 reveal-up delay-1">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-soft/35 p-8 shadow-sm hover-lift">
            <p className="text-sm font-semibold tracking-wider uppercase text-brand">Role Focus</p>
            <h2 className="text-3xl font-bold mt-2 mb-4">Engineering-ready across the full development lifecycle.</h2>
            <ul className="space-y-3">
              {roleHighlights.map((point, index) => (
                <li
                  key={point}
                  className="rounded-lg border border-border bg-surface-soft px-4 py-3 text-sm reveal-up"
                  style={{ animationDelay: `${120 + index * 80}ms` }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-soft/35 p-8 shadow-sm hover-lift">
            <p className="text-sm font-semibold tracking-wider uppercase text-brand">Technical Skills</p>
            <h2 className="text-3xl font-bold mt-2 mb-5">Core tools used in my portfolio projects.</h2>
            <div className="space-y-4">
              {technicalSkills.map((group, index) => (
                <div key={group.category} className="reveal-soft" style={{ animationDelay: `${80 + index * 70}ms` }}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="text-xs bg-surface-soft border border-border px-3 py-1.5 rounded-full badge-pop">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="pb-20 px-6 reveal-up delay-2">
        <div className="max-w-6xl mx-auto rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-soft/35 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-brand">Professional Objective</p>
              <h2 className="text-3xl font-bold mt-2 mb-3">Contribute immediately and keep growing with strong teams.</h2>
              <p className="text-muted">
                I am looking for opportunities where I can build production-level frontend and backend features,
                collaborate in modern engineering workflows, and deliver measurable product value.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface-soft/90 p-5 hover-lift">
              <p className="text-sm text-muted mb-3">
                Best fit roles: Full-Stack Engineer, Frontend Developer, Backend Developer, and Software Engineer.
              </p>
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-strong shadow-sm"
              >
                Contact for Internship
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 reveal-up delay-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-brand">Selected Work</p>
              <h2 className="text-3xl font-bold mt-2">Featured Projects</h2>
            </div>
            <Link href="/projects" className="text-brand font-medium hover:underline">
              View all projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="rounded-xl border border-border bg-gradient-to-br from-surface to-surface-soft/30 p-6 shadow-sm hover-lift reveal-up"
                style={{ animationDelay: `${120 + index * 110}ms` }}
              >
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted mb-3">{project.type}</p>
                <p className="text-sm text-muted">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 reveal-soft delay-3">
        <div className="max-w-6xl mx-auto rounded-2xl bg-brand p-8 md:p-10 text-white text-center md:text-left md:flex md:items-center md:justify-between gap-8">
          <div>
            <p className="text-sm tracking-wider uppercase">Open to Opportunities</p>
            <h2 className="text-3xl font-bold mt-2">Let’s connect for frontend, backend, or full-stack roles.</h2>
            <p className="text-blue-100 mt-2">Available for internships and early-career software engineering opportunities.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <Link href="/contact" className="inline-block px-6 py-3 rounded-md bg-white text-brand font-semibold hover:bg-blue-50 hover-lift">
              Get In Touch
            </Link>
            <Link
              href="/resume/Abdullah_Rifak_CV_Software_Engineer_Intern.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-md border border-white text-white font-semibold hover:bg-white/10 hover-lift"
            >
              Download CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
