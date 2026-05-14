import { useState, useEffect } from 'react'

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  useEffect(() => {
    const root = document.documentElement
    if (dark) { root.classList.add('dark') } else { root.classList.remove('dark') }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  return [dark, () => setDark(d => !d)]
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}

/* ─── Data ─── */

const skills = {
  Languages: ['Python', 'JavaScript', 'SQL', 'NoSQL'],
  Frontend: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  'AI & Data': ['Machine Learning', 'Data Analysis', 'Automation', 'APIs'],
  Tools: ['Git', 'VS Code', 'Figma', 'Postman'],
}

const projects = [
  {
    title: 'AI Automation Dashboard',
    description:
      'An intelligent dashboard that monitors and manages automated workflows, providing real-time insights and decision-making support through clean data visualization.',
    tags: ['Python', 'React', 'AI', 'Data'],
  },
  {
    title: 'Smart Data Analysis Tool',
    description:
      'A practical tool that transforms raw datasets into structured, readable insights using SQL queries, automated reports, and interactive filtering.',
    tags: ['Python', 'SQL', 'NoSQL', 'Analytics'],
  },
  {
    title: 'React Portfolio System',
    description:
      'A modular, component-based portfolio system built for developers who want a clean, maintainable, and fast personal website with minimal setup.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
  },
]

/* ─── Icons ─── */

function ArrowUpRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13L13 3M13 3H5M13 3v8" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

/* ─── Navigation ─── */

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, toggleDark] = useDarkMode()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F6F3]/90 dark:bg-[#1a1a1d]/90 backdrop-blur-md border-b border-charcoal/[0.06] dark:border-white/[0.06]">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-charcoal dark:text-white" aria-label="Home">
          FA<span className="text-charcoal/40 dark:text-white/40">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link relative text-[13px] font-medium text-charcoal/45 dark:text-white/45 hover:text-charcoal dark:hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <button onClick={toggleDark} className="p-2 rounded-lg text-charcoal/50 dark:text-white/50 hover:text-charcoal dark:hover:text-white transition-colors" aria-label="Toggle dark mode">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="#contact"
            className="ml-1 rounded-lg bg-charcoal dark:bg-white px-5 py-2 text-[13px] font-semibold text-white dark:text-charcoal transition-all duration-300 hover:bg-charcoal/80 dark:hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleDark} className="p-2 text-charcoal/50 dark:text-white/50" aria-label="Toggle dark mode">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-charcoal dark:text-white p-1" aria-label="Menu">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-[#F7F6F3] dark:bg-[#1a1a1d] border-t border-charcoal/[0.06] dark:border-white/[0.06] px-6 pb-5 pt-3">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-charcoal/55 dark:text-white/55 hover:text-charcoal dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-charcoal dark:bg-white px-5 py-2.5 text-center text-sm font-semibold text-white dark:text-charcoal hover:bg-charcoal/80 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  )
}

/* ─── Hero ─── */

const roles = ['AI Engineer', 'Full-Stack Developer', 'Python Expert', 'React Developer', 'Data Enthusiast']

function useRotatingText(items, interval = 2800) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % items.length)
        setVisible(true)
      }, 400)
    }, interval)
    return () => clearInterval(timer)
  }, [items.length, interval])
  return [items[index], visible]
}

function Hero() {
  const [role, roleVisible] = useRotatingText(roles)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section id="home" className="hero-section min-h-[100vh] flex flex-col justify-center pt-20 pb-0 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="hero-bg-grid" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center relative z-10">
        {/* Left — text */}
        <div className={`hero-content-left ${mounted ? 'hero-animate-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 dark:border-white/10 bg-charcoal/[0.03] dark:bg-white/[0.05] px-3.5 py-1.5 mb-7">
            <span className="hero-pulse-dot" />
            <span className="text-[11px] font-semibold text-charcoal/50 dark:text-white/50 tracking-wide uppercase">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-charcoal dark:text-white">
            Furqan Ali
          </h1>

          <div className="mt-2 h-8 flex items-center">
            <span className={`text-xl font-semibold bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40 dark:from-white/80 dark:via-white/60 dark:to-white/40 bg-clip-text text-transparent transition-all duration-400 ${roleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              {role}
            </span>
            <span className="hero-cursor-blink ml-1 w-[2px] h-5 bg-charcoal/50 dark:bg-white/50 inline-block" />
          </div>

          <p className="mt-6 text-[15px] leading-7 text-charcoal/50 dark:text-white/50 max-w-md">
            I design and build intelligent web systems that combine clean interfaces,
            automation, and practical AI‑driven functionality.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-charcoal dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-charcoal hover:bg-charcoal/80 dark:hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:shadow-charcoal/10 dark:hover:shadow-black/20 hover:-translate-y-0.5"
            >
              View Projects <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><ArrowUpRight /></span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-charcoal/12 dark:border-white/15 px-6 py-3 text-sm font-semibold text-charcoal dark:text-white hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-[11px] font-medium text-charcoal/30 dark:text-white/30 uppercase tracking-widest">Find me</span>
            <span className="w-8 h-[1px] bg-charcoal/10 dark:bg-white/10" />
            <a href="https://github.com/FurqanAliii" target="_blank" rel="noopener noreferrer" className="text-charcoal/35 dark:text-white/35 hover:text-charcoal dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/furqan-ali-a01b37320/" target="_blank" rel="noopener noreferrer" className="text-charcoal/35 dark:text-white/35 hover:text-charcoal dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"><LinkedInIcon /></a>
            <a href="mailto:furqanautomation@gmail.com" className="text-charcoal/35 dark:text-white/35 hover:text-charcoal dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"><MailIcon /></a>
          </div>
        </div>

        {/* Right — profile photo with floating elements */}
        <div className={`flex justify-center lg:justify-end relative ${mounted ? 'hero-animate-in-right' : 'opacity-0'}`}>
          {/* Floating code snippet card */}
          <div className="hero-float-card absolute -top-6 -left-4 lg:-left-10 bg-[#FAFAF8] dark:bg-[#222226] rounded-xl shadow-lg shadow-charcoal/[0.06] dark:shadow-black/25 border border-charcoal/[0.06] dark:border-white/[0.08] px-4 py-3 z-20 hidden sm:block">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
              <span className="w-2 h-2 rounded-full bg-green-400/60" />
            </div>
            <pre className="text-[10px] font-mono text-charcoal/50 dark:text-white/50 leading-relaxed">
{`const engineer = {
  name: "Furqan",
  focus: "AI",
  ready: true
}`}
            </pre>
          </div>

          {/* Floating tech badges */}
          <div className="hero-float-badge-1 absolute -right-3 top-8 lg:-right-6 z-20 hidden sm:flex items-center gap-1.5 bg-[#FAFAF8] dark:bg-[#222226] rounded-full shadow-md shadow-charcoal/[0.05] dark:shadow-black/20 border border-charcoal/[0.06] dark:border-white/[0.08] px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
            <span className="text-[10px] font-bold text-charcoal/60 dark:text-white/60">Python</span>
          </div>

          <div className="hero-float-badge-2 absolute -left-2 bottom-20 lg:-left-6 z-20 hidden sm:flex items-center gap-1.5 bg-[#FAFAF8] dark:bg-[#222226] rounded-full shadow-md shadow-charcoal/[0.05] dark:shadow-black/20 border border-charcoal/[0.06] dark:border-white/[0.08] px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/70" />
            <span className="text-[10px] font-bold text-charcoal/60 dark:text-white/60">React</span>
          </div>

          <div className="hero-float-badge-3 absolute right-4 bottom-4 lg:right-0 z-20 hidden sm:flex items-center gap-1.5 bg-[#FAFAF8] dark:bg-[#222226] rounded-full shadow-md shadow-charcoal/[0.05] dark:shadow-black/20 border border-charcoal/[0.06] dark:border-white/[0.08] px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
            <span className="text-[10px] font-bold text-charcoal/60 dark:text-white/60">AI / ML</span>
          </div>

          <div className="profile-frame relative">
            {/* Corner brackets */}
            <div className="absolute -top-3 -left-3 w-5 h-5 border-t-[2.5px] border-l-[2.5px] border-charcoal/25 dark:border-white/25 rounded-tl-md" />
            <div className="absolute -top-3 -right-3 w-5 h-5 border-t-[2.5px] border-r-[2.5px] border-charcoal/25 dark:border-white/25 rounded-tr-md" />
            <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-[2.5px] border-l-[2.5px] border-charcoal/25 dark:border-white/25 rounded-bl-md" />
            <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-[2.5px] border-r-[2.5px] border-charcoal/25 dark:border-white/25 rounded-br-md" />

            <img
              src="/RF.png"
              alt="Furqan Ali — AI Engineer"
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover object-top"
            />

            {/* Info card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#FAFAF8] dark:bg-[#222226] rounded-lg shadow-md shadow-charcoal/[0.05] dark:shadow-black/20 border border-charcoal/[0.06] dark:border-white/[0.08] px-4 py-2.5">
              <p className="text-[11px] font-bold text-charcoal dark:text-white uppercase tracking-widest">AI Engineer</p>
              <p className="text-[11px] text-charcoal/40 dark:text-white/40 mt-0.5">Python · React · JS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <span className="text-[10px] font-medium text-charcoal/25 dark:text-white/25 uppercase tracking-[0.2em]">Scroll</span>
        <div className="hero-scroll-line w-[1px] h-8 bg-charcoal/15 dark:bg-white/15 relative overflow-hidden">
          <div className="hero-scroll-dot" />
        </div>
      </div>

      {/* Tech stack marquee strip */}
      <div className="relative z-10 mt-16 lg:mt-20 border-t border-charcoal/[0.06] dark:border-white/[0.06] pt-6 pb-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-bold text-charcoal/25 dark:text-white/25 uppercase tracking-[0.2em] shrink-0 relative z-10 bg-[#F7F6F3] dark:bg-[#1a1a1d] pr-2">Tech Stack</span>
          <span className="w-[1px] h-4 bg-charcoal/10 dark:bg-white/10 shrink-0 relative z-10" />
          <div className="overflow-hidden flex-1 min-w-0">
            <div className="hero-marquee-track flex gap-8">
              {['Python', 'JavaScript', 'React.js', 'SQL', 'NoSQL', 'Machine Learning', 'Tailwind CSS', 'Git', 'Node.js', 'APIs', 'Python', 'JavaScript', 'React.js', 'SQL', 'NoSQL', 'Machine Learning', 'Tailwind CSS', 'Git', 'Node.js', 'APIs'].map((tech, i) => (
                <span key={i} className="text-[12px] font-semibold text-charcoal/20 dark:text-white/20 whitespace-nowrap tracking-wide">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── About ─── */

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#F2F1EE] dark:bg-[#151517]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="About Me" />
        <h2 className="mt-3 text-3xl sm:text-[2rem] font-extrabold tracking-tight text-charcoal dark:text-white">
          A few things about me
        </h2>

        <div className="mt-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-14">
          <div className="space-y-4 text-[15px] leading-7 text-charcoal/55 dark:text-white/55">
            <p>
              I'm Furqan Ali, an AI Engineer with a deep interest in building systems that sit at
              the intersection of intelligent automation and clean user experiences. My work involves
              writing code that makes complex things feel simple — whether it's a data pipeline,
              an interactive dashboard, or an AI‑powered workflow.
            </p>
            <p>
              I work primarily with Python, React, JavaScript, SQL, and NoSQL technologies. I
              believe good software should be practical first, and my focus is always on building
              tools that solve real problems with minimal friction.
            </p>
            <p>
              When I'm not coding, I'm exploring new approaches in machine learning, reading
              about system design, or refining my craft as a developer who cares equally about
              functionality and form.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard value="5+" label="Technologies" />
            <StatCard value="AI" label="Focus Area" />
            <StatCard value="∞" label="Curiosity" />
            <div className="rounded-xl bg-charcoal dark:bg-white p-5 flex flex-col justify-between">
              <p className="text-2xl font-extrabold text-white dark:text-charcoal">FA.</p>
              <p className="text-[10px] font-medium text-white/40 dark:text-charcoal/40 uppercase tracking-widest mt-4">
                Personal Brand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-xl border border-charcoal/[0.06] dark:border-white/[0.08] bg-[#FAFAF8] dark:bg-[#222226] p-5">
      <p className="text-2xl font-extrabold text-charcoal dark:text-white">{value}</p>
      <p className="text-[10px] font-medium text-charcoal/35 dark:text-white/35 uppercase tracking-widest mt-4">
        {label}
      </p>
    </div>
  )
}

/* ─── Skills ─── */

function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Skills" />
        <h2 className="mt-3 text-3xl sm:text-[2rem] font-extrabold tracking-tight text-charcoal dark:text-white max-w-sm">
          Technologies & tools I work with
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border border-charcoal/[0.06] dark:border-white/[0.08] bg-[#FAFAF8] dark:bg-[#222226] p-5 hover:border-charcoal/20 dark:hover:border-white/20 transition-colors"
            >
              <h3 className="text-[13px] font-bold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30 dark:bg-white/30" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-gray-50 dark:bg-white/[0.06] px-2.5 py-1.5 text-[12px] font-medium text-charcoal/60 dark:text-white/60 hover:bg-charcoal dark:hover:bg-white hover:text-white dark:hover:text-charcoal transition-colors cursor-default"
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
  )
}

/* ─── Projects ─── */

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#F2F1EE] dark:bg-[#151517]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-12">
          <div>
            <SectionLabel text="Projects" />
            <h2 className="mt-3 text-3xl sm:text-[2rem] font-extrabold tracking-tight text-charcoal dark:text-white">
              Selected work
            </h2>
          </div>
          <p className="text-[13px] text-charcoal/35 dark:text-white/35 max-w-xs">
            Concept projects showcasing my approach to building clean, functional systems.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="hover-lift group rounded-xl border border-charcoal/[0.06] dark:border-white/[0.08] bg-[#FAFAF8] dark:bg-[#222226] p-6 cursor-default"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-bold text-charcoal/30 dark:text-white/30 tracking-widest">
                  0{i + 1}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-charcoal dark:text-white">
                  <ArrowUpRight size={13} />
                </span>
              </div>

              <h3 className="text-base font-bold text-charcoal dark:text-white group-hover:text-charcoal/70 dark:group-hover:text-white/70 transition-colors">
                {project.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.7] text-charcoal/45 dark:text-white/45">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-50 dark:bg-white/[0.06] px-2 py-1 text-[11px] font-semibold text-charcoal/40 dark:text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ─── */

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionLabel text="Contact" centered />
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal dark:text-white">
          Let's build something intelligent.
        </h2>
        <p className="mt-4 text-[15px] leading-7 text-charcoal/45 dark:text-white/45 max-w-md mx-auto">
          I'm open to freelance projects, collaborations, and full‑time opportunities. If you
          have an idea that aligns with my skills, I'd love to hear from you.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:furqanautomation@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-charcoal dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-charcoal hover:bg-charcoal/80 dark:hover:bg-white/80 transition-colors"
          >
            <MailIcon /> Email Me
          </a>
          <a
            href="https://github.com/FurqanAliii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-charcoal/12 dark:border-white/15 px-6 py-3 text-sm font-semibold text-charcoal dark:text-white hover:bg-charcoal dark:hover:bg-white hover:text-white dark:hover:text-charcoal transition-colors"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/furqan-ali-a01b37320/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-charcoal/12 dark:border-white/15 px-6 py-3 text-sm font-semibold text-charcoal dark:text-white hover:bg-charcoal dark:hover:bg-white hover:text-white dark:hover:text-charcoal transition-colors"
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="border-t border-charcoal/[0.06] dark:border-white/[0.06] py-7 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-charcoal/30 dark:text-white/30">
          © {new Date().getFullYear()} Furqan Ali — All Rights Reserved
        </p>
        <p className="text-[11px] font-medium text-charcoal/30 dark:text-white/30 hover:text-charcoal dark:hover:text-white transition-colors">
          Developed and designed by Fa.
        </p>
      </div>
    </footer>
  )
}

/* ─── Shared ─── */

function SectionLabel({ text, centered }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.18em] text-charcoal/45 dark:text-white/45 ${centered ? 'text-center' : ''}`}>
      {text}
    </p>
  )
}

/* ─── App ─── */

function App() {
  return (
    <main className="min-h-screen bg-[#F7F6F3] dark:bg-[#1a1a1d] text-charcoal dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
