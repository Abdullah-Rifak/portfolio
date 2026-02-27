export default function ContactPage() {
  const contactOptions = [
    {
      title: "Email",
      value: "abdullahrifak522@gmail.com",
      href: "mailto:abdullahrifak522@gmail.com",
    },
    {
      title: "Phone",
      value: "+94 76 715 9969",
      href: "tel:+94767159969",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/abdullah-rifak",
      href: "https://www.linkedin.com/in/abdullah-rifak",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="text-center max-w-3xl mx-auto reveal-up">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Ready to discuss your project?</h1>
          <p className="text-muted mt-4">
            I’m available for internships, freelance collaborations, and full-stack development opportunities.
            Reach out through your preferred channel.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3 reveal-up delay-1">
          {contactOptions.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-xl border border-border bg-surface p-6 shadow-sm hover:bg-surface-soft hover-lift reveal-up"
              style={{ animationDelay: `${100 + index * 80}ms` }}
            >
              <p className="text-sm font-semibold text-brand uppercase tracking-wide">{item.title}</p>
              <p className="mt-2 text-muted break-all">{item.value}</p>
            </a>
          ))}
        </section>

        <section className="rounded-2xl border border-border bg-surface p-8 md:p-10 grid gap-8 md:grid-cols-2 items-start reveal-up delay-2">
          <div>
            <h2 className="text-2xl font-bold mb-3">Response Promise</h2>
            <p className="text-muted mb-4">You can expect a reply within 24 hours with next steps and availability.</p>
            <ul className="text-sm text-muted list-disc pl-5 space-y-2">
              <li>Project scoping and requirement clarification</li>
              <li>Technology recommendations based on your goals</li>
              <li>Timeline and implementation planning</li>
            </ul>
          </div>

          <div className="rounded-xl bg-surface-soft border border-border p-6 hover-lift reveal-up" style={{ animationDelay: "180ms" }}>
            <h3 className="text-xl font-semibold mb-3">Quick Start</h3>
            <p className="text-sm text-muted mb-5">
              Share your project idea, desired timeline, and any references. I’ll help turn it into a practical
              execution plan.
            </p>
            <a
              href="mailto:abdullahrifak522@gmail.com?subject=Project%20Inquiry"
              className="inline-block px-5 py-3 rounded-md bg-brand text-white font-medium hover:bg-brand-strong"
            >
              Send Project Inquiry
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
