'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

export default function Portfolio() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#eeeae3", fontFamily: "var(--font-dm, sans-serif)" }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 border-b"
        style={{ background: "rgba(10,10,10,0.82)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.06)" }}>
        <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.03em" }}>
          anjishnu<span style={{ color: "#c8f060" }}>.</span>portolio
        </span>
        <ul className="hidden md:flex gap-8 list-none">
          {["About", "Skills", "Projects", "Contact"].map((s) => (
            <li key={s}>
              <a href={`#${s.toLowerCase()}`}
                style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#777470", textDecoration: "none" }}
                className="hover:text-white transition-colors">
                {s}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="rounded-full px-5 py-2 text-xs font-medium border transition-colors hover:bg-white/5"
          style={{ borderColor: "rgba(255,255,255,0.11)", color: "#eeeae3", textDecoration: "none" }}>
          Hire me
        </a>
      </nav>

      {/* HERO */}
      <section id="hero" className="flex items-center justify-center px-6 py-6" style={{ minHeight: "92vh" }}>
        <Card className="w-full relative overflow-hidden border"
          style={{ background: "#000", borderColor: "rgba(255,255,255,0.10)", borderRadius: "20px", minHeight: "82vh" }}>
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

          <div className="flex h-full" style={{ minHeight: "82vh" }}>
            {/* Left */}
            <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-16 relative z-10 gap-0">
              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 w-fit text-xs font-medium tracking-widest uppercase"
                style={{ background: "rgba(200,240,96,0.08)", border: "1px solid rgba(200,240,96,0.18)", color: "#c8f060" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#c8f060" }} />
                Available for work
              </motion.div>

              <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
                className="mb-6 leading-none"
                style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 800, fontSize: "clamp(2.8rem,5vw,5rem)", letterSpacing: "-0.04em" }}>
                <span style={{ color: "#f0ede8", display: "block" }}>Full Stack</span>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.22)", display: "inline" }}>Developer</span>
                <span style={{ color: "#c8f060" }}>.</span>
              </motion.h1>

              <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
                className="mb-10 max-w-sm text-base leading-relaxed"
                style={{ color: "#777470" }}>
                I build end-to-end products - from pixel-perfect UIs to battle-tested backends. Clean architecture, zero compromise.
              </motion.p>

              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex gap-3 flex-wrap">
                <a href="#projects" className="rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ background: "#c8f060", color: "#080808", textDecoration: "none", fontFamily: "var(--font-dm, sans-serif)" }}>
                  View my work →
                </a>
                <a href="#contact" className="rounded-full px-6 py-3 text-sm font-medium border transition-colors hover:bg-white/5"
                  style={{ borderColor: "rgba(255,255,255,0.11)", color: "#eeeae3", textDecoration: "none" }}>
                  Let&apos;s talk
                </a>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
                className="flex gap-10 mt-12 pt-8"
                style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
                {[["4+", "Years exp."], ["10+", "Projects"], ["5+", "Clients"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 800, fontSize: "1.75rem", color: "#eeeae3", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "11px", color: "#777470", marginTop: "4px", letterSpacing: "0.05em" }}>{l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — SplineScene */}
            <div className="flex-1 relative hidden md:block">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-16 py-24" style={{ background: "#111", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="https://i.ibb.co/MkvwVdyk/Anjishnu04.jpg"
              alt="Portrait"
              width={500}
              height={667}
              className="w-full object-cover"
              style={{ borderRadius: "16px", border: "0.5px solid rgba(255,255,255,0.11)", filter: "grayscale(15%)", aspectRatio: "3/4" }}
            />
            <div className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3 text-sm font-extrabold leading-snug"
              style={{ background: "#c8f060", color: "#080808", fontFamily: "var(--font-syne, sans-serif)" }}>
              Open to<br />remote
            </div>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#c8f060" }}>About me</p>
            <h2 className="mb-6 leading-tight" style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.75rem)", letterSpacing: "-0.03em" }}>
              Building things that matter.
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#777470", fontSize: "0.95rem" }}>
              Hey I am Anjishnu a passionate full-stack developer and tech enthusiast who enjoys building impactful digital solutions. I love turning ideas into real-world projects by combining creativity with strong technical skills. My core focus is web development, where I build responsive, scalable, and user-friendly applications.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "#777470", fontSize: "0.95rem" }}>
              I’m always exploring new technologies, improving my problem-solving skills, and aiming to build systems that create meaningful impact.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["React / Next.js", "Node.js", "TypeScript", "Python", "Firebase", "HTML", "CSS", "Framer Motion", "MongoDB", "Git & GitHub", "Vercel", "Figma",].map((t) => (
                <span key={t} className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ border: "1px solid rgba(255,255,255,0.11)", color: "#777470", background: "#161616" }}>
                  {t}
                </span>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ background: "#c8f060", color: "#080808", textDecoration: "none" }}>
              Download CV →
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-16 py-24" style={{ background: "#0a0a0a", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#c8f060" }}>What I do</p>
          <h2 className="mb-3 leading-tight" style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.75rem)", letterSpacing: "-0.03em" }}>
            My stack.
          </h2>
          <p className="mb-12 max-w-xl" style={{ color: "#777470", fontSize: "0.95rem", lineHeight: 1.75 }}>
            From idea to deployment — I cover the full spectrum of modern web development.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "⚡", name: "Frontend", desc: "Crafting fast, accessible, visually sharp interfaces.", pills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "HTML", "CSS", "Java Script"] },
              { icon: "🔧", name: "Backend", desc: "Scalable APIs and systems built for performance.", pills: ["Node.js", "Express.js"] },
              { icon: "🗄️", name: "Database", desc: "Schemas and queries that scale without breaking.", pills: ["Firebase", "MongoDB"] },
              { icon: "☁️", name: "DevOps", desc: "CI/CD pipelines to cloud deployments, end to end.", pills: ["GitHub", "Vercel"] },
              { icon: "🎨", name: "Design Systems", desc: "Reusable components and consistent design languages.", pills: ["shadcn/ui", "Figma",] },
              { icon: "🤖", name: "AI Integration", desc: "LLMs, RAG pipelines, and AI features in real products.", pills: ["OpenAI", "Claude", "Groq", "AI ChatBot"] },
            ].map((skill) => (
              <motion.div key={skill.name} whileHover={{ y: -4 }}
                className="p-7 rounded-2xl border transition-colors"
                style={{ background: "#111", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base mb-4"
                  style={{ background: "rgba(200,240,96,0.08)", border: "1px solid rgba(200,240,96,0.18)" }}>
                  {skill.icon}
                </div>
                <div className="font-bold mb-2 text-base" style={{ fontFamily: "var(--font-syne, sans-serif)", color: "#eeeae3" }}>{skill.name}</div>
                <div className="text-xs mb-5 leading-relaxed" style={{ color: "#777470" }}>{skill.desc}</div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.pills.map((p) => (
                    <span key={p} className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: "#161616", color: "#777470", border: "0.5px solid rgba(255,255,255,0.06)" }}>
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-16 py-24" style={{ background: "#111", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#c8f060" }}>Selected work</p>
          <h2 className="mb-3 leading-tight" style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.75rem)", letterSpacing: "-0.03em" }}>
            Projects.
          </h2>
          <p className="mb-12 max-w-xl" style={{ color: "#777470", fontSize: "0.95rem", lineHeight: 1.75 }}>
            A curated selection of things I&apos;ve shipped — SaaS platforms, developer tools, AI apps.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { img: "https://i.ibb.co/SwpXzpLR/SYnaptic.png", github: "https://github.com/Anjishnu04/Synaptic", tags: ["Next.js", "AI", "TS", "Firebase"], name: "Synaptic", desc: "Full-stack AI chat app with real-time web search, multiple model selection (Llama, Mixtral), Firebase auth, markdown rendering, and customizable themes." },
              { img: "https://i.ibb.co/W4sQks0T/Posterix.png", github: "https://github.com/Anjishnu04/posterix", tags: ["React", "Vite"], name: "Posterix", desc: "Modern e-commerce store for premium posters and custom prints. Full shopping cart, category filtering, price range slider, auth with Firebase, and newsletter signup." },
              { img: "https://i.ibb.co/4hRNhdC/Finio.png", github: "https://github.com/Anjishnu04/Finio-ExpenseTracker", tags: ["React", "JS", "Vite"], name: "Finio", desc: "Lightweight expense tracker with a dark-themed dashboard, budget management, visual analytics charts, and client-side LocalStorage — no backend needed." },
              { img: "https://i.ibb.co/KxzrV1g4/Localkart.png", github: "https://github.com/Anjishnu04/LocalKart", tags: ["React", "JS", "Vite"], name: "LocalKart", desc: "E-commerce platform built for small shopkeepers to list and sell their products online for free. A social impact project aimed at helping local businesses grow." },
              { img: "https://i.ibb.co/8LRBzDpN/My-Portfolio.png", github: "https://github.com/Anjishnu04/My-Portfolio", tags: ["React5", "TS"], name: "Portfolio", desc:"Personal developer portfolio showcasing all projects with a modern, responsive design built in HTML." },
              { img: "https://i.ibb.co/0jn3jTgk/Calculator.png", github: "https://github.com/Anjishnu04/Calculator", tags: ["HTML", "JS"], name: "Calculator", desc:"A clean, functional calculator built with vanilla HTML, CSS, and JavaScript — a foundational project demonstrating DOM manipulation and event handling."},
              { img: "https://i.ibb.co/jv3RfLbV/To-Do-List.png", github: "https://github.com/Anjishnu04/To-Do-List", tags: ["HTML", "JS"], name: "To-Do List", desc:"A simple, interactive to-do list app with task creation, completion toggling, and deletion — built with vanilla JavaScript for clean state management." },

            ].map((p) => (
              <motion.div key={p.name} whileHover={{ y: -4, borderColor: "rgba(200,240,96,0.25)" }}
                className="rounded-2xl border overflow-hidden cursor-pointer transition-colors"
                style={{ background: "#0a0a0a", borderColor: "rgba(255,255,255,0.06)" }}>
                <Image src={p.img || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"} alt={p.name} width={600} height={338} className="w-full object-cover" style={{ aspectRatio: "16/9", display: "block" }} />
                <div className="p-6">
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wider"
                        style={{ background: "rgba(200,240,96,0.08)", color: "#c8f060", border: "1px solid rgba(200,240,96,0.18)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="font-bold text-base mb-2" style={{ fontFamily: "var(--font-syne, sans-serif)", color: "#eeeae3", letterSpacing: "-0.02em" }}>{p.name}</div>
                  <div className="text-xs mb-5 leading-relaxed" style={{ color: "#777470" }}>{p.desc}</div>
                  <div className="flex gap-4">
                    <a href="#" className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[#c8f060]" style={{ color: "#777470", textDecoration: "none" }}>
                     {/* <ExternalLink size={13} /> Live demo */}
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[#c8f060]" style={{ color: "#777470", textDecoration: "none" }}>
                      <ExternalLink size={13} /> GitHub


                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28 text-center" style={{ background: "#0a0a0a", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#c8f060" }}>Get in touch</p>
          <h2 className="mb-4 leading-none"
            style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 800, fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.04em", color: "#eeeae3" }}>
            Let&apos;s build<br />something<span style={{ color: "#c8f060" }}>.</span>
          </h2>
          <p className="mb-8" style={{ color: "#777470", fontSize: "0.95rem" }}>
            Open to full-time roles, freelance, and interesting collaborations. Drop me a line.
          </p>
          <a href="mailto:hello@example.com"
            style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 600, fontSize: "1.05rem", color: "#c8f060", textDecoration: "none", borderBottom: "1px solid rgba(200,240,96,0.3)", paddingBottom: "2px" }}>
            anjishnusarkar30@icloud.com
          </a>
          <div className="flex gap-3 justify-center mt-8">
            {[
              { icon: <ExternalLink size={14} />, label: "GitHub", href: "https://github.com/Anjishnu04" },
              { icon: <ExternalLink size={14} />, label: "LinkedIn", href: "https://www.linkedin.com/in/anjishnu-sarkar-37161a393" },
              { icon: <ExternalLink size={14} />, label: "Instagram", href: "https://www.instagram.com/04.anjishnu.08/" },
            ].map(({ icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium border transition-colors hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.11)", color: "#777470", textDecoration: "none" }}>
                {icon} {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex items-center justify-between px-10 py-6" style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", fontSize: "11px", color: "#555250" }}>
        <span>© 2026 Anjishnu.portfolio</span>
        <span>Designed & built by Anjishnu</span>
      </footer>

    </main>
  )
}
