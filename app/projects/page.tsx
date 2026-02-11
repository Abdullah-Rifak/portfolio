export default function ProjectsPage() {

    const projects = [
        {
            title: "LAN POS System and supplier tracking system",
            type:"Freelance",
            contribution: "Full Stack Developer",
            description:
            "Local network grocery POS with local MongoDB and supplier tracking .",
            tech: ["Node.js", "MongoDB", "Express","React"],
            github: [
                {
                    label:"Repository",
                    url:"https://github.com/Abdullah-Rifak/POS-System"
                }
            ],
            liveDemo:"https://www.linkedin.com/feed/update/urn:li:activity:7404333534687199233/?originTrackingId=BcemO%2BV8wNTjUe521KfLzg%3D%3D"
        },
        {
            title: "Eco Harvest",
            type:"Academic Group Project",
            contribution:"Discount management - Full-Stack",
            description:
            "Contributed in discount management based on the multiple roles.",
            tech: ["Next.js", "MongoDB", "TailwindCSS", "MVC","React","MERN"],
            github: [{
                label:"Frontend",
                url:"https://github.com/NivakaranS/ecoHarvest-Frontend"
                },
                {
                    label:"Backend",
                    url:"https://github.com/NivakaranS/ecoHarvest-Backend"
                },
                ],
        },
        {
            title: "R & R Lankan taxi",
            type:"Freelance",
            contribution: "Front-End Developer",
            description:
            "Mobile-first responsive UI and clean desktop scaling with a full-width layout.",
            tech: ["Node.js", "MongoDB", "Express","EmailJs","Vercel"],
            github: [{
                label:"Repository",
                url:"https://github.com/Abdullah-Rifak/rrlankantaxi"}],
            liveDemo:"https://rrlankantaxi.com"
        },{
            title:"Meetup",
            type:"Academic Group Project",
            contribution:"Full-Stack",
            description:
            "Online event management and social platform for hosting and attending events, with features like event creation, RSVPs, and user profiles.",
            tech: ["Java servlets", "MongoDB", "HTML", "MVC","CSS","JavaScript"],
            github: [{
                label:"Repository",
                url:"https://github.com/Abdullah-Rifak/online-event-management"}]
        },{
            title:"Petversel",
            type:"Academic Group Project",
            contribution:"Contact us Page with CRUD Operations",
            description:"Collaborated on a responsive website offering pet care services with user subscriptions and newsletters. Implemented database-backed user management with seamless UI/UX.",
            tech:["JavaScript","CSS","HTML","PHP"],
            github:[{
                label:"Repository",
                url:"https://github.com/Abdullah-Rifak/pet-versal"}]
        }
];

  return (
    <div className="min-h-screen px-6 py-16">
      <h1 className="text-3xl font-bold mb-12 text-center">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-xl p-[1px] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-blue-500/40 hover:from-blue-500 hover:to-purple-500 transitio"
          >
                <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
                    
                    {/* Top Section */}
                    <div>
                    <h2 className="text-xl font-semibold mb-1">
                        {project.title}
                    </h2>

                    <p className="text-xs text-neutral-500 mb-3">
                    <span className="font-medium">{project.type}</span> | {project.contribution}
                    </p>

                    <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((techItem, i) => (
                        <span
                            key={i}
                            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                        >
                            {techItem}
                        </span>
                        ))}
                    </div>
                    </div>

                    {/* Bottom Links */}
                    <div className="flex flex-wrap items-center gap-4 mt-6">
                    {project.github?.map((repo, i) => (
                        <a
                        key={i}
                        href={repo.url}
                        target="_blank"
                        className="text-blue-600 text-sm font-medium hover:underline"
                        >
                        {repo.label} →
                        </a>
                    ))}

                    {project.liveDemo && (
                        <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 text-sm font-medium hover:underline"
                        >
                        Live Demo →
                        </a>
                    )}
                    </div>

                </div>
            </div>
        ))}
      </div>
    </div>
  );
}