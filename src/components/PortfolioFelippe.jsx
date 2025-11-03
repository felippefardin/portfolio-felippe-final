import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink } from 'lucide-react';

// PortfolioFelippe — single file React component (TailwindCSS + Framer Motion)
// How to use:
// 1) Create a new React project (Vite or Next.js). Install dependencies: framer-motion, lucide-react, tailwindcss.
// 2) Drop this file under src/components/PortfolioFelippe.jsx and import it on your page (e.g. App.jsx).
// 3) Tailwind config should allow dark mode = 'class'.

export default function PortfolioFelippe() {
  // Dark mode (persist in localStorage)
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('pf:dark') === '1';
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('pf:dark', dark ? '1' : '0'); } catch (e) {}
  }, [dark]);

  // Sample projects based on your CV (edit titles, descriptions and links)
  const projects = [
    {
      id: 1,
      title: 'Library Management System',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      description: 'Full CRUD system for library inventory and loans. Backend in PHP with MySQL, frontend responsive with Bootstrap.',
      image: '/projects/library.png',
      repo: 'https://github.com/felippefardin/library-system',
      live: '#'
    },
    {
      id: 2,
      title: 'Reservation System',
      tags: ['PHP', 'jQuery', 'MySQL'],
      description: 'Hotel reservation system with availability checks, user roles and PDF exports.',
      image: '/projects/reservations.png',
      repo: 'https://github.com/felippefardin/reservations',
      live: '#'
    },
    {
      id: 3,
      title: 'Agency Landing Page',
      tags: ['HTML', 'CSS', 'JavaScript'],
      description: 'Marketing landing page with contact form and conversion tracking.',
      image: '/projects/landing.png',
      repo: 'https://github.com/felippefardin/agency-landing',
      live: '#'
    },
    {
      id: 4,
      title: 'Social Network (Prototype)',
      tags: ['React', 'Node.js', 'MongoDB'],
      description: 'Prototype social feed and authentication flow (PWA ready).',
      image: '/projects/social.png',
      repo: 'https://github.com/felippefardin/social-prototype',
      live: '#'
    }
  ];

  const [activeProject, setActiveProject] = useState(null);

  // motion variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } }
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">FF</div>
            <div>
              <div className="text-sm font-semibold">Felippe Fardin Andreata</div>
              <div className="text-xs opacity-70">Full Stack Developer</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://github.com/felippefardin" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/felippefardin" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
              <Linkedin size={18} />
            </a>
            <a href="mailto:felippefardin@gmail.com" aria-label="Email" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
              <Mail size={18} />
            </a>
            <button onClick={() => setDark(d => !d)} aria-label="Toggle dark" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="pt-20">
        <section className="min-h-[72vh] flex items-center">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m Felippe — Full Stack Developer</h1>
              <p className="mt-4 text-lg max-w-xl">I build reliable and secure web systems with clean user experiences. Experienced in PHP (Laravel), JavaScript, RESTful APIs and database design. Currently expanding skills in Cybersecurity.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">View Projects</a>
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Contact Me</a>
              </div>

              <div className="mt-6 text-sm opacity-75">
                <div>Vila Velha, ES • Open to opportunities</div>
                <div className="mt-2">Languages: Portuguese (Native), English (Intermediate), Spanish (Basic)</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center md:justify-end">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                {/* Placeholder for photo — replace with your portrait */}
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">Felippe</div>
                  <div className="text-sm opacity-90">Full Stack Developer</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>About</motion.h2>
            <motion.p className="mt-4 text-lg leading-relaxed" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Junior Full Stack Developer with a degree in Systems Analysis and Development and ongoing postgraduate studies in Cybersecurity. My work spans back-end and front-end development using PHP (Laravel), JavaScript, and RESTful APIs. I participated in the full software lifecycle — from requirements analysis to deployment — and I enjoy improving code quality, system performance and security.
            </motion.p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800/30">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Experience</motion.h2>

            <motion.div className="mt-8 grid md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.article className="p-6 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900/40 shadow-sm" variants={item}>
                <h3 className="font-semibold">Prefeitura Municipal da Serra</h3>
                <div className="text-sm italic opacity-80">Intern — Innovation & Technology (May 2024 - Aug 2025)</div>
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
                  <li>Developed and optimized institutional websites, focusing on UX and performance.</li>
                  <li>Integrated systems via RESTful APIs and performed MySQL data migrations.</li>
                  <li>Worked with the development team using agile practices and provided technical support.</li>
                </ul>
              </motion.article>

              <motion.article className="p-6 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900/40 shadow-sm" variants={item}>
                <h3 className="font-semibold">Fardin Móveis</h3>
                <div className="text-sm italic opacity-80">Admin & Sales Manager (2012 - 2020)</div>
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
                  <li>Managed accounts payable/receivable, bank reconciliations and financial reporting.</li>
                  <li>Supported the sales team and managed customer relations.</li>
                  <li>Organized internal processes and documentation.</li>
                </ul>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Projects</motion.h2>

            <motion.div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {projects.map(p => (
                <motion.article key={p.id} className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-900/40 border dark:border-gray-800" variants={item}>
                  <div className="h-40 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    {/* Replace with project image */}
                    <div className="text-sm opacity-70">Preview image</div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm opacity-80">{p.description}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800/50">{t}</span>)}
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-2">
                      <div className="flex gap-2">
                        <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-1 px-3 py-1 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"><Github size={14}/> Repo</a>
                        <button onClick={() => setActiveProject(p)} className="text-sm inline-flex items-center gap-1 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"><ExternalLink size={14}/> View</button>
                      </div>
                      <a href={p.live} target="_blank" rel="noreferrer" className="text-xs opacity-80 hover:underline">Live</a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <div className="mt-8 text-center">
              <a href="https://github.com/felippefardin" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">See more on GitHub</a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800/30">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Skills</motion.h2>

            <motion.div className="mt-6 grid sm:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div className="p-6 rounded-lg bg-white dark:bg-gray-900/40 border dark:border-gray-700" variants={item}>
                <h4 className="font-semibold mb-2">Back-End</h4>
                <p className="text-sm">PHP (Laravel), Go, RESTful APIs, JWT, Secure Coding</p>
              </motion.div>

              <motion.div className="p-6 rounded-lg bg-white dark:bg-gray-900/40 border dark:border-gray-700" variants={item}>
                <h4 className="font-semibold mb-2">Front-End</h4>
                <p className="text-sm">HTML5, CSS3, JavaScript, React (basic), Bootstrap, Performance Optimization</p>
              </motion.div>

              <motion.div className="p-6 rounded-lg bg-white dark:bg-gray-900/40 border dark:border-gray-700" variants={item}>
                <h4 className="font-semibold mb-2">Database & DevOps</h4>
                <p className="text-sm">MySQL, Data Modeling, Query Optimization, Apache/Nginx, Linux Deploy</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Contact</motion.h2>

            <motion.form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); alert('This demo does not send email. I can add PHP (PHPMailer) or a serverless function if you want.'); }}>
              <input name="name" placeholder="Your name" required className="p-3 rounded border dark:border-gray-700 bg-white dark:bg-gray-900/40" />
              <input name="email" type="email" placeholder="Your email" required className="p-3 rounded border dark:border-gray-700 bg-white dark:bg-gray-900/40" />
              <textarea name="message" placeholder="Message" required className="p-3 rounded border dark:border-gray-700 bg-white dark:bg-gray-900/40 h-32"></textarea>
              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Send message</button>
                <div className="text-sm opacity-70">Or email me at <a href="mailto:felippefardin@gmail.com" className="underline">felippefardin@gmail.com</a></div>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-12">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm opacity-80">© 2025 Felippe Fardin Andreata — Built with care.</div>
        </footer>
      </main>

      {/* Project modal */}
      {activeProject && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/50" onClick={() => setActiveProject(null)} />
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative z-10 max-w-3xl w-full bg-white dark:bg-gray-900/95 rounded-lg overflow-hidden shadow-xl">
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{activeProject.title}</h3>
                  <div className="text-sm opacity-80 mt-1">{activeProject.tags.join(' • ')}</div>
                </div>
                <button className="text-sm opacity-80" onClick={() => setActiveProject(null)}>Close</button>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">Preview</div>
                <div>
                  <p className="text-sm">{activeProject.description}</p>
                  <div className="mt-4 flex gap-2">
                    <a href={activeProject.repo} target="_blank" rel="noreferrer" className="px-3 py-1 rounded border">Repository</a>
                    <a href={activeProject.live} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-blue-600 text-white">Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
