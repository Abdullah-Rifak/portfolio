export default function ProjectsPage() {
  const projects = [
    {
      title: "LAN POS System and supplier tracking system",
      type: "Freelance",
      contribution: "Full Stack Developer",
      description: "Local network grocery POS with local MongoDB and supplier tracking.",
      tech: ["Node.js", "MongoDB", "Express", "React"],
      github: [
        {
          label: "Repository",
          url: "https://github.com/Abdullah-Rifak/POS-System",
        },
      ],
      liveDemo:
        "https://www.linkedin.com/feed/update/urn:li:activity:7404333534687199233/?originTrackingId=BcemO%2BV8wNTjUe521KfLzg%3D%3D",
    },
    {
      title: "Eco Harvest",
      type: "Academic Group Project",
      contribution: "Discount management - Full-Stack",
      description: "Contributed in discount management based on the multiple roles.",
      tech: ["Next.js", "MongoDB", "TailwindCSS", "MVC", "React", "MERN"],
      github: [
        {
          label: "Frontend",
          url: "https://github.com/NivakaranS/ecoHarvest-Frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/NivakaranS/ecoHarvest-Backend",
        },
      ],
    },
    {
      title: "R & R Lankan taxi",
      type: "Freelance",
      contribution: "Front-End Developer",
      description: "Mobile-first responsive UI and clean desktop scaling with a full-width layout.",
      tech: ["Node.js", "MongoDB", "Express", "EmailJs", "Vercel"],
      github: [
        {
          label: "Repository",
          url: "https://github.com/Abdullah-Rifak/rrlankantaxi",
        },
      ],
      liveDemo: "https://rrlankantaxi.com",
    },
    {
      title: "Meetup",
      type: "Academic Group Project",
      contribution: "Full-Stack",
      description:
        "Online event management and social platform for hosting and attending events, with features like event creation, RSVPs, and user profiles.",
      tech: ["Java servlets", "MongoDB", "HTML", "MVC", "CSS", "JavaScript"],
      github: [
        {
          label: "Repository",
          url: "https://github.com/Abdullah-Rifak/online-event-management",
        },
      ],
    },
    {
      title: "Petversel",
      type: "Academic Group Project",
      contribution: "Contact us Page with CRUD Operations",
      description:
        "Collaborated on a responsive website offering pet care services with user subscriptions and newsletters. Implemented database-backed user management with seamless UI/UX.",
      tech: ["JavaScript", "CSS", "HTML", "PHP"],
      github: [
        {
          label: "Repository",
          url: "https://github.com/Abdullah-Rifak/pet-versal",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <section className="text-center max-w-3xl mx-auto mb-12 reveal-up">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand">Portfolio Work</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Projects That Solve Real Problems</h1>
          <p className="text-muted mt-4">
            A collection of freelance and academic projects focused on usable interfaces, practical architecture,
            and complete feature delivery.
          </p>
        </section>

        <section className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-xl border border-border bg-surface p-6 shadow-sm flex flex-col hover-lift reveal-up"
              style={{ animationDelay: `${100 + index * 70}ms` }}
            >
              <div>
                <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
                <p className="text-xs text-muted mb-4">
                  <span className="font-medium text-foreground">{project.type}</span> · {project.contribution}
                </p>

                <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((techItem) => (
                    <span key={techItem} className="text-xs bg-surface-soft border border-border px-2.5 py-1 rounded-full badge-pop">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-auto pt-2">
                {project.github?.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand text-sm font-medium hover:underline"
                  >
                    {repo.label} →
                  </a>
                ))}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 text-sm font-medium hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
