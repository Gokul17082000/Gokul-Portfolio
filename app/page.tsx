export default function Home() {
  const skills = {
    backend: [
      "Java (8/17/21)",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "Oracle",
      "Multithreading",
      "Microservices",
    ],
    platform: ["Kubernetes", "Helm", "Jenkins", "CI/CD"],
    aiIntegration: ["GPT APIs", "Prompt engineering"],
  };

  const experience = [
    {
      role: "Senior Software Developer",
      company: "Visa Inc.",
      location: "Bengaluru, India",
      period: "June 2022 – Present",
      highlights: [
        "Design and operate high‑throughput payment services using Java 8/17, Spring, and Spring Boot.",
        "Introduce asynchronous execution with CompletableFuture and ExecutorService to improve throughput and latency.",
        "Improve latency of critical payment flows by ~10% while safely handling hundreds of TPS in normal and peak periods.",
        "Modernize legacy services with design patterns and Java Streams, improving readability, maintainability, and test coverage.",
        "Lead Java 8 → 17 migration across critical flows, strengthening performance, security, and operability.",
        "Automate build, test, and deployment using Jenkins pipelines following CI/CD best practices.",
        "Own production stability via root cause analysis, observability, and incident/post‑incident reviews in close collaboration with cross‑functional teams.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Visa Inc.",
      location: "Bengaluru, India",
      period: "May 2021 – August 2021",
      highlights: [
        "Designed and built a Spring Boot payment gateway to process transaction requests and transform them into ISO messages.",
        "Implemented a reusable validation layer to centralize data integrity rules across multiple gateways.",
      ],
    },
    {
      role: "Intern",
      company: "Datacenter of Department of Computer Technology, MIT",
      location: "Chennai, India",
      period: "December 2020 – April 2021",
      highlights: [
        "Built responsive Angular frontends for the department website, ensuring a consistent experience across devices.",
      ],
    },
  ];

  const projects = [
    {
      name: "VPC Modularization",
      type: "Payments / Backend",
      highlights: [
        "Modularized and migrated legacy XML‑based logic to Java, significantly improving performance and reducing processing time.",
        "Drove end‑to‑end architecture, development, and deployment into a scalable, maintainable system.",
        "Introduced multithreaded execution with a 30‑thread pool and ArrayBlockingQueue(50) for additional comparison processing, rolled out safely via TIP (Test in Production).",
        "Improved latency by ~10% while safely handling ~300 TPS on normal days, ~700 TPS at peak, and up to ~100 TPS for comparison workloads.",
      ],
    },
    {
      name: "HabitAI",
      type: "Backend / Productivity",
      highlights: [
        "Backend system for habit tracking, streaks, and reminders designed with clean, modular architecture.",
        "Implements JWT-based authentication, habit CRUD, habit logs and streak calculation, and a centralized reminder scheduler with notification abstraction.",
        "Built with Java 21, Spring Boot 4, Spring Security, PostgreSQL, and robust validation/exception handling patterns; designed with explicit state transitions for habit status and streaks to keep behavior deterministic and make future horizontal scaling straightforward.",
        "Currently runs as a single instance with a central scheduler, with a clear path to scale scheduling and notifications independently.",
      ],
      repoUrl: "https://github.com/Gokul17082000/HabitAI",
    },
    {
      name: "Simulator BOT",
      type: "AI / Developer Productivity",
      highlights: [
        "GPT‑4–powered assistant that uses internal mapping documentation to tell merchants exactly which trigger amount to send to exercise specific ISO fields or APIs in the simulator.",
        "Avoids sending real transactions to downstream processors by driving a simulator that returns the right responses based on trigger amounts, reducing back‑and‑forth and making test coverage more intentional.",
      ],
    },
  ];

  const achievements = [
    "Best Developer Award – Visa, for high‑impact contributions to COSTCO platform changes.",
    "Silver Award – Visa, for P2J (Presto‑to‑Java) migration work.",
    "Silver Award – Visa, for VPC 2.0 migration and rollout.",
    "Repeated Visa hackathon participant (2023 & 2024), focusing on innovative, production‑minded ideas.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-100 px-4 py-10 md:px-6 md:py-20">
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
        {/* Hero */}
        <section className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-[0.3em] text-emerald-400 uppercase">
              Backend · Payments · AI
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Gokul B J
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl">
              Senior Backend Engineer at Visa designing and operating high‑throughput payment systems, with a focus on
              scalable Java/Spring services and AI‑integrated backend workflows.
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex flex-wrap gap-2">
              <a
                href="mailto:gokulbj17082000@gmail.com"
                className="rounded-full border border-emerald-500/70 bg-emerald-500/10 px-4 py-2 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
              >
                Email
              </a>
              <a
                href="tel:+916383713810"
                className="rounded-full border border-slate-600 px-4 py-2 text-sm font-medium hover:bg-slate-800/60 transition-colors"
              >
                Call
              </a>
              <a
                href="https://github.com/Gokul17082000"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-600 px-4 py-2 text-sm font-medium hover:bg-slate-800/60 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/gokul-b-j"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-600 px-4 py-2 text-sm font-medium hover:bg-slate-800/60 transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-xs text-slate-400">
              Bengaluru, India · Open to backend & platform roles with strong ownership of systems in production.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">About</h2>
          <p className="text-slate-300 leading-relaxed">
            I&apos;m a backend engineer who owns critical payment flows end‑to‑end—from design and implementation to
            deployment and monitoring. I design and operate resilient backend services using Java, Spring, and
            distributed systems principles, with a strong foundation in algorithms, system design, and debugging complex
            production issues.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Recently, I&apos;ve been applying AI tooling deliberately into this stack—using GPT‑based systems to support
            developer workflows (like simulators and internal tools) and business use cases, while keeping reliability
            and observability front‑and‑center.
          </p>
        </section>

        {/* Experience */}
        <section className="space-y-5 md:space-y-6">
          <h2 className="text-2xl font-semibold text-slate-50">Experience</h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <article
                key={job.role + job.company}
                className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 md:p-6 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-slate-900/70"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50">
                      {job.role}
                    </h3>
                    <p className="text-sm text-slate-300">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="text-xs text-slate-400">{job.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-5 md:space-y-6">
          <h2 className="text-2xl font-semibold text-slate-50">Selected Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-slate-900/70"
              >
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-400">
                    {project.type}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {project.name}
                  </h3>
                  <ul className="mt-2 space-y-2 text-xs text-slate-300">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {"repoUrl" in project && project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 hover:underline mt-3"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold text-slate-50">Technical Skills</h2>
            <p className="text-xs text-slate-400">
              Strongest in backend engineering, payments, and distributed systems.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-[0.18em]">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-100 border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-[0.18em]">
                Platform & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.platform.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-100 border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-[0.18em]">
                AI Integration
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.aiIntegration.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-100 border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How I work */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-50">How I work</h2>
          <p className="text-sm text-slate-300">
            I care about clear boundaries, observability‑first design, and making systems easy to operate in production.
            I prefer explicit logic over clever abstractions, and I only optimize once real bottlenecks are understood.
          </p>
          <p className="text-sm text-slate-300">
            When things start going in the wrong direction, I always go back to the basics and first principles before
            adding complexity again.
          </p>
        </section>

        {/* Achievements */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Achievements</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {achievements.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* GitHub & Open Source */}
        <section className="space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold text-slate-50">GitHub & Open Source</h2>
            <a
              href="https://github.com/Gokul17082000"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-emerald-400 hover:underline"
            >
              View full profile
            </a>
          </div>
          <p className="text-sm text-slate-300 max-w-2xl">
            I use GitHub to build and refine production‑minded backend services and AI‑integrated systems, including
            HabitAI and related tooling.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://github.com/Gokul17082000/HabitAI"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition hover:border-emerald-500/70 hover:bg-slate-900/60"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">
                  HabitAI
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Backend
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                Cleanly designed habit tracking backend with JWT auth, streaks, scheduling, and reminder architecture
                built for future scaling.
              </p>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <h2 className="text-2xl font-semibold text-slate-50">Contact</h2>
          <p className="text-sm text-slate-300">
            For backend, payment platform, or AI‑integrated backend roles, feel free to reach out. I&apos;m currently
            looking for backend/platform roles where I can own high‑throughput services end‑to‑end and bring AI into
            developer and business workflows.
          </p>
          <div className="space-y-1 text-sm text-slate-200">
            <p>
              Email:{" "}
              <a
                href="mailto:gokulbj17082000@gmail.com"
                className="text-emerald-400 hover:underline"
              >
                gokulbj17082000@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+916383713810" className="hover:underline">
                +91 63837 13810
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/gokul-b-j"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline"
              >
                linkedin.com/in/gokul-b-j
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}