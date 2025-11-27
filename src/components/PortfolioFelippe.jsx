import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink, Shield, Terminal, Server } from 'lucide-react';

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

  // --- CYBERSECURITY LABS / PROJECTS ---
  const projects = [
    {
      id: 1,
      title: 'Wazuh – Basic SIEM',
      tags: ['SIEM', 'Blue Team', 'Monitoring'],
      description: 'Creation of alerts, log analysis, and investigation of simulated events using Wazuh for threat detection.',
      image: null, // Placeholder will be used
      repo: 'https://github.com/felippefardin', // Adjust if you have a specific repo
      live: '#'
    },
    {
      id: 2,
      title: 'Traffic Analysis (Wireshark)',
      tags: ['Forensics', 'Networking', 'Packet Analysis'],
      description: 'Identification of suspicious packets, protocol analysis, and detection of anomalous network behavior.',
      image: null,
      repo: 'https://github.com/felippefardin',
      live: '#'
    },
    {
      id: 3,
      title: 'Vulnerability Scanning',
      tags: ['OpenVAS', 'Nessus', 'Vuln Management'],
      description: 'Execution of scans in controlled environments, CVSS classification, and creation of reports with remediation recommendations.',
      image: null,
      repo: 'https://github.com/felippefardin',
      live: '#'
    },
    {
      id: 4,
      title: 'Nmap Mapping',
      tags: ['Recon', 'Networking', 'Offensive Security'],
      description: 'Port scanning, service fingerprinting, and exposure surface analysis for hardening.',
      image: null,
      repo: 'https://github.com/felippefardin',
      live: '#'
    },
    {
      id: 5,
      title: 'TryHackMe Labs',
      tags: ['SOC Level 1', 'Pre-Security', 'Training'],
      description: 'Completion of practical paths focused on defense fundamentals, incident response, and basic offensive security.',
      image: null,
      repo: 'https://tryhackme.com', // You can put your THM profile link here
      live: '#'
    },
    // Dev projects kept as complementary
    {
      id: 6,
      title: 'Account Control App',
      tags: ['DevSec', 'PHP', 'Full Stack'],
      description: 'Web system focused on secure development best practices and access control.',
      image: '/projects/project2.png',
      repo: 'https://github.com/felippefardin/app-controle-contas',
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
              <div className="text-xs opacity-70">Cybersecurity / SOC Analyst</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Labs & Projects</a>
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
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Defending infrastructures and analyzing threats.
              </h1>
              <p className="mt-4 text-lg max-w-xl text-gray-600 dark:text-gray-300">
                Technology Professional with a postgraduate degree in Cybersecurity.
                Specialist in vulnerability analysis, network monitoring, and incident response.
                Seeking a role as a <strong>Cybersecurity Analyst / SOC N1</strong>.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">View Labs & Projects</a>
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Get in Touch</a>
              </div>

              <div className="mt-8 flex gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1"><Shield size={14}/> Blue Team</span>
                <span className="flex items-center gap-1"><Terminal size={14}/> Hardening</span>
                <span className="flex items-center gap-1"><Server size={14}/> Network Security</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center md:justify-end">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800">
                <img 
                  src="/images/profile.jpeg" 
                  alt="Felippe Fardin Andreata" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About & Education */}
        <section id="about" className="py-16 bg-white dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold mb-6" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              About & Education
            </motion.h2>
            
            <motion.div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p>
                I possess solid knowledge in networking, Linux, vulnerability analysis, and SOC fundamentals.
                My previous experience in development allows me to have an in-depth view of application security and secure coding.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">🎓 Education</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <strong>Postgraduate in Cybersecurity</strong>
                      <div className="text-xs opacity-75">Institution (Year)</div>
                    </li>
                    <li>
                      <strong>Systems Analysis and Development</strong>
                      <div className="text-xs opacity-75">Vila Velha University (UVV)</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">🌍 Languages</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between"><span>Portuguese</span> <span className="opacity-70">Fluent (Native)</span></li>
                    <li className="flex justify-between"><span>English</span> <span className="opacity-70">Intermediate</span></li>
                    <li className="flex justify-between"><span>Spanish</span> <span className="opacity-70">Basic</span></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold mb-8" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Professional Experience
            </motion.h2>

            <motion.div className="grid md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.article className="p-6 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900/40 shadow-sm" variants={item}>
                <h3 className="font-semibold text-xl">Serra City Hall</h3>
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-4">IT Intern (2023 – Present)</div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Technical support and maintenance of internal systems focusing on security and integrity.</li>
                  <li>Log analysis, access tracking, and basic event monitoring.</li>
                  <li>Configuration and organization of network assets and user management.</li>
                  <li>Resolution of IT incidents, applying security best practices.</li>
                  <li>Working with web systems and APIs, reinforcing application security knowledge.</li>
                </ul>
              </motion.article>

              <motion.article className="p-6 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900/40 shadow-sm opacity-80" variants={item}>
                <h3 className="font-semibold text-xl">Fardin Furniture (Fardin Móveis)</h3>
                <div className="text-sm text-gray-500 mb-4">Administrative & Sales Manager (2012 - 2020)</div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Management of financial and administrative processes.</li>
                  <li>Organization of documentation and support for the sales team.</li>
                  <li>Problem-solving and customer service.</li>
                </ul>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800/30">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold mb-8" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Skills & Technologies
            </motion.h2>

            <motion.div className="grid sm:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {/* Card 1: Cyber Core */}
              <motion.div className="p-6 rounded-lg bg-white dark:bg-gray-900/60 border dark:border-gray-700 shadow-sm hover:shadow-md transition" variants={item}>
                <div className="mb-4 p-2 bg-red-100 dark:bg-red-900/30 w-fit rounded text-red-600 dark:text-red-400">
                  <Shield size={24} />
                </div>
                <h4 className="font-bold mb-3">Cybersecurity & Defense</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>SOC & Blue Team Fundamentals</li>
                  <li>Network Security (TCP/IP, DNS, HTTP)</li>
                  <li>Linux (Permissions, Services, Hardening)</li>
                  <li>OWASP Top 10 & Vuln. Analysis</li>
                  <li>Incident Response</li>
                </ul>
              </motion.div>

              {/* Card 2: Tools */}
              <motion.div className="p-6 rounded-lg bg-white dark:bg-gray-900/60 border dark:border-gray-700 shadow-sm hover:shadow-md transition" variants={item}>
                <div className="mb-4 p-2 bg-blue-100 dark:bg-blue-900/30 w-fit rounded text-blue-600 dark:text-blue-400">
                  <Terminal size={24} />
                </div>
                <h4 className="font-bold mb-3">Tools & SIEM</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li><strong>Nmap</strong> (Network Mapping)</li>
                  <li><strong>Wireshark</strong> (Traffic Analysis)</li>
                  <li><strong>Burp Suite</strong> (Web Security)</li>
                  <li><strong>OpenVAS / Nessus</strong> (Scans)</li>
                  <li><strong>Wazuh</strong> (SIEM - Alerts & Logs)</li>
                </ul>
              </motion.div>

              {/* Card 3: Dev & Infra */}
              <motion.div className="p-6 rounded-lg bg-white dark:bg-gray-900/60 border dark:border-gray-700 shadow-sm hover:shadow-md transition" variants={item}>
                <div className="mb-4 p-2 bg-purple-100 dark:bg-purple-900/30 w-fit rounded text-purple-600 dark:text-purple-400">
                  <Server size={24} />
                </div>
                <h4 className="font-bold mb-3">Dev & Infrastructure</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>PHP (Laravel), JavaScript, HTML, CSS</li>
                  <li>SQL / MySQL</li>
                  <li>Git and GitHub</li>
                  <li>React (Basic) & RESTful APIs</li>
                  <li>Technical Support & Infrastructure</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects / Labs */}
        <section id="projects" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold mb-8" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Labs & Practical Projects
            </motion.h2>

            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {projects.map(p => (
                <motion.article 
                  key={p.id} 
                  className="rounded-xl overflow-hidden bg-white dark:bg-gray-900/40 border dark:border-gray-800 hover:border-blue-500/50 transition duration-300" 
                  variants={item}
                >
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative">
                      {/* If image exists, show it, otherwise show icon based on title */}
                      {p.image ? (
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-90" />
                      ) : (
                        <div className="text-gray-400">
                          {p.title.includes('Wazuh') ? <Shield size={48}/> : <Terminal size={48}/>}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map(t => (
                        <span key={t} className="text-[10px] uppercase font-semibold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-auto pt-4 border-t dark:border-gray-800">
                      <button 
                        onClick={() => setActiveProject(p)} 
                        className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        <ExternalLink size={12}/> Details
                      </button>
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 ml-auto">Repo</a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800/30">
          <div className="max-w-3xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold mb-6" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Let's Talk?
            </motion.h2>

            <motion.form 
              className="mt-6 grid gap-4" 
              action="https://formspree.io/f/mrbowjvr" 
              method="POST"
            >
              <input name="name" placeholder="Your name" required className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/40 focus:ring-2 focus:ring-blue-500 outline-none transition" />
              <input name="email" type="email" placeholder="Your email" required className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/40 focus:ring-2 focus:ring-blue-500 outline-none transition" />
              <textarea name="message" placeholder="Your message..." required className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/40 h-32 focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <button type="submit" className="w-full sm:w-auto px-6 py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Send Message</button>
                <div className="text-sm opacity-70">Or send an email to <a href="mailto:felippefardin@gmail.com" className="underline text-blue-600 dark:text-blue-400">felippefardin@gmail.com</a></div>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-8">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm opacity-60">
            <p>© 2025 Felippe Fardin Andreata. Portfolio updated focusing on Cybersecurity.</p>
          </div>
        </footer>
      </main>

      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-black/60" onClick={() => setActiveProject(null)}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{activeProject.title}</h3>
                <button onClick={() => setActiveProject(null)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition">
                  <span className="sr-only">Close</span>
                  <ExternalLink className="rotate-180" size={20} />
                </button>
              </div>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {activeProject.tags.map(t => (
                  <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>{activeProject.description}</p>
                <p className="text-sm opacity-80">
                  This project demonstrates essential practical skills for the SOC Analyst role, focusing on risk identification, analysis, and mitigation.
                </p>
              </div>

              <div className="mt-8 flex gap-4 pt-6 border-t dark:border-gray-800">
                {activeProject.repo && (
                  <a href={activeProject.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm font-medium">
                    View Repository
                  </a>
                )}
                <button onClick={() => setActiveProject(null)} className="ml-auto text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}