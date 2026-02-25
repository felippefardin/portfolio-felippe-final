import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink, Shield, Terminal, Server, Code, Database, Award, BookOpen, Send } from 'lucide-react';

export default function PortfolioFelippe() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('pf:dark') === '1';
    } catch (e) {
      return true;
    }
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('pf:dark', dark ? '1' : '0'); } catch (e) {}
  }, [dark]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    const response = await fetch("https://formspree.io/f/contatotech.tecnologia@gmail.com", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  const projects = [
    {
      id: 1,
      title: 'App Controle de Contas',
      tags: ['PHP', 'Laravel', 'MySQL', 'Security'],
      description: 'Personal financial management system focused on secure authentication and data protection.',
      repo: 'https://github.com/felippefardin/app-controle-contas.git',
      icon: <Database size={48}/>
    },
    {
      id: 2,
      title: 'Controle de Máquinas',
      tags: ['PHP', 'Inventory', 'Asset Management'],
      description: 'Platform for hardware inventory and technological asset control.',
      repo: 'https://github.com/felippefardin/controle_maquinas.git',
      icon: <Server size={48}/>
    },
    {
      id: 3,
      title: 'PMG Serra - Systems',
      tags: ['Public Systems', 'PHP', 'GovTech'],
      description: 'Development of solutions for the Municipal Attorney General\'s Office of Serra.',
      repo: 'https://github.com/felippefardin/pmg-serra.git',
      icon: <Shield size={48}/>
    },
    {
      id: 4,
      title: 'Professional Landing Page',
      tags: ['React', 'Tailwind', 'Vite'],
      description: 'Modern portfolio focused on performance and UX for professional presentation.',
      repo: 'https://github.com/felippefardin/landing-page-felippe.git',
      icon: <ExternalLink size={48}/>
    }
  ];

  const certifications = [
    { 
      title: 'Analysis and System Development', 
      issuer: 'UVV - Universidade Vila Velha', 
      icon: <BookOpen size={20}/>,
      link: 'https://www.canva.com/design/DAHCWVV5Tx4/cB0nq37VCkb40tJIvGPBBA/view?utm_content=DAHCWVV5Tx4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h67fe51227f'
    },
    { 
      title: 'Certified in Cybersecurity (CC)', 
      issuer: 'ISC2', 
      icon: <Award size={20}/>,
      link: 'https://www.credly.com/badges/860ebf6a-c11a-4de0-9f8c-2394e87caf3b/linked_in_profile'
    },
    { 
      title: 'CIW JavaScript Specialist', 
      issuer: 'DIO', 
      icon: <Code size={20}/>,
      link: 'https://www.dio.me/certificate/Z3UCHOAS/share'
    },
    { 
      title: 'Go Developer Formation', 
      issuer: 'DIO', 
      icon: <Terminal size={20}/>,
      link: 'https://www.dio.me/certificate/EZKHW71H/share'
    }
  ];

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
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">FF</div>
            <div>
              <div className="text-sm font-semibold">Felippe Fardin</div>
              <div className="text-xs opacity-70 italic">Cybersecurity & Developer</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#experience" className="hover:text-blue-500 transition">Career</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#certs" className="hover:text-blue-500 transition">Certifications</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://github.com/felippefardin" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"><Github size={18} /></a>
            <a href="https://linkedin.com/in/felippefardin" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"><Linkedin size={18} /></a>
            <button onClick={() => setDark(d => !d)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-600 font-bold tracking-widest text-sm uppercase">Full Stack Developer | Cybersecurity</motion.span>
              <h1 className="text-5xl font-extrabold mt-2 mb-6">Felippe Fardin Andreata</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Junior Full Stack Developer, graduated in Systems Analysis and Development (UVV) and currently a postgraduate student in Cybersecurity. 
                I operate at the intersection of Full Stack development and Information Security, enhancing skills focused on defensive security, 
                best practices, incident investigation, and threat monitoring. Currently working on the digital transformation of public administration, 
                bridging secure code and resilient infrastructure. I am open to challenges and opportunities to apply my knowledge and evolve professionally.
              </p>
              <div className="mt-8">
                <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">Let's Talk?</a>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
               <img src="/images/profile.jpeg" alt="Felippe" className="w-64 h-64 rounded-3xl object-cover shadow-2xl border-8 border-white dark:border-gray-800 rotate-3 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section id="experience" className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Terminal className="text-blue-500" /> Current Experience
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-blue-500/20 shadow-xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Technical Advisor</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Municipal Attorney General's Office - Serra</p>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">Present</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium italic">
              "Strategic IT advice ensuring system integrity and technical support for municipal management."
            </p>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section id="skills" className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold mb-10 font-mono tracking-tighter uppercase">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm">
               <Shield className="text-red-500 mb-4" size={32} />
               <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
               <p className="text-sm opacity-80 leading-relaxed">Vulnerability Analysis, Linux Hardening, SIEM (Wazuh), SOC N1, and OWASP Top 10 focus.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm">
               <Code className="text-blue-500 mb-4" size={32} />
               <h3 className="text-xl font-bold mb-4">Development</h3>
               <p className="text-sm opacity-80 leading-relaxed">PHP (Laravel), JavaScript (React), API REST, MySQLi, Go, and Git/GitHub versioning.</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certs" className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold mb-10">Certifications & Education</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.a 
                key={i} 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ y: -5, borderColor: '#3b82f6' }} 
                className={`p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-4 shadow-sm transition-all ${cert.link ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{cert.title}</h4>
                  <p className="text-xs opacity-60 mt-1">{cert.issuer}</p>
                  {cert.link && <span className="text-[10px] text-blue-500 font-bold mt-2 block uppercase tracking-wider">View Credential →</span>}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={container} initial="hidden" whileInView="show">
            {projects.map(p => (
              <motion.article key={p.id} className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700 hover:shadow-2xl hover:border-blue-500/50 transition-all" variants={item}>
                <div className="mb-6 text-blue-500 group-hover:scale-110 transition-transform flex justify-center">{p.icon}</div>
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed h-16 line-clamp-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.slice(0, 3).map(t => <span key={t} className="text-[10px] px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded uppercase font-bold">{t}</span>)}
                </div>
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 transition">
                   <Github size={16}/> Source Code
                </a>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-3xl mx-auto px-6 pt-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold mb-4">Let's Talk?</h2>
            <p className="text-gray-600 dark:text-gray-400">Fill out the form below to get in touch professionally.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border dark:border-gray-700 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20 text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Your message has been sent.</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Thank you for getting in touch. I will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 font-bold hover:underline">Send another message</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60 ml-1">Name</label>
                    <input name="name" type="text" placeholder="Your Name" required className="w-full p-4 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60 ml-1">Contact (Email/Phone)</label>
                    <input name="contact" type="text" placeholder="email@example.com" required className="w-full p-4 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60 ml-1">Subject / Title</label>
                  <input name="subject" type="text" placeholder="Collaboration Inquiry" required className="w-full p-4 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60 ml-1">Message</label>
                  <textarea name="message" placeholder="Describe how we can collaborate..." required className="w-full p-4 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 h-32 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 text-center">
        <div className="flex justify-center gap-6 mb-6 opacity-60">
          <a href="https://github.com/felippefardin" target="_blank" rel="noreferrer"><Github size={20}/></a>
          <a href="https://linkedin.com/in/felippefardin" target="_blank" rel="noreferrer"><Linkedin size={20}/></a>
          <a href="mailto:contatotech.tecnologia@gmail.com"><Mail size={20}/></a>
        </div>
        <p className="text-sm opacity-50">© 2026 Felippe Fardin Andreata | Focused on Security & Tech</p>
      </footer>
    </div>
  );
}