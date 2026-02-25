import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink, Shield, Terminal, Server, Code, Database, Award, BookOpen } from 'lucide-react';

export default function PortfolioFelippe() {
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

  const projects = [
    {
      id: 1,
      title: 'App Controle de Contas',
      tags: ['PHP', 'Laravel', 'MySQL', 'Security'],
      description: 'Sistema de gestão financeira pessoal com foco em autenticação segura e proteção de dados.',
      repo: 'https://github.com/felippefardin/app-controle-contas.git',
      icon: <Database size={48}/>
    },
    {
      id: 2,
      title: 'Controle de Máquinas',
      tags: ['PHP', 'Inventory', 'Asset Management'],
      description: 'Plataforma para inventário de hardware e controle de ativos tecnológicos.',
      repo: 'https://github.com/felippefardin/controle_maquinas.git',
      icon: <Server size={48}/>
    },
    {
      id: 3,
      title: 'PMG Serra - Sistemas',
      tags: ['Sistemas Públicos', 'PHP', 'GovTech'],
      description: 'Desenvolvimento de soluções para a Procuradoria Geral do Município da Serra.',
      repo: 'https://github.com/felippefardin/pmg-serra.git',
      icon: <Shield size={48}/>
    },
    {
      id: 4,
      title: 'Landing Page Profissional',
      tags: ['React', 'Tailwind', 'Vite'],
      description: 'Portfólio moderno focado em performance e UX para apresentação profissional.',
      repo: 'https://github.com/felippefardin/landing-page-felippe.git',
      icon: <ExternalLink size={48}/>
    }
  ];

  const certifications = [
    { title: 'Análise e Desenvolvimento de Sistemas', issuer: 'UVV - Universidade Vila Velha', icon: <BookOpen size={20}/> },
    { title: 'Networking & Cybersecurity Basics', issuer: 'Cisco Networking Academy', icon: <Server size={20}/> },
    { title: 'Certified in Cybersecurity (CC)', issuer: 'ISC2', icon: <Award size={20}/> }
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
            <a href="#about" className="hover:text-blue-500 transition">Sobre</a>
            <a href="#experience" className="hover:text-blue-500 transition">Carreira</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projetos</a>
            <a href="#certs" className="hover:text-blue-500 transition">Certificações</a>
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
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-600 font-bold tracking-widest text-sm uppercase">Assessor Técnico de TI</motion.span>
              <h1 className="text-5xl font-extrabold mt-2 mb-6">Felippe Fardin Andreata</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Especialista em Análise de Sistemas (UVV) focado em cibersegurança e desenvolvimento full stack. 
                Atuo na transformação digital da administração pública, unindo código seguro à infraestrutura resiliente.
              </p>
            </div>
            <div className="md:col-span-2 flex justify-center">
               <img src="/images/profile.jpeg" alt="Felippe" className="w-64 h-64 rounded-3xl object-cover shadow-2xl border-8 border-white dark:border-gray-800 rotate-3 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section id="experience" className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Terminal className="text-blue-500" /> Experiência Atual
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-blue-500/20 shadow-xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Assessor Técnico</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Procuradoria Municipal de Serra</p>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">Atual</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Responsável pela assessoria estratégica em tecnologia da informação, garantindo a integridade dos sistemas internos, 
              suporte técnico especializado e otimização de fluxos digitais da Procuradoria.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Gestão de TI', 'Segurança da Informação', 'Sistemas Públicos', 'Suporte Estratégico'].map(s => (
                <span key={s} className="text-xs font-semibold px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg">{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Certificações */}
        <section id="certs" className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold mb-10">Certificações & Educação</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-4 shadow-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{cert.title}</h4>
                  <p className="text-xs opacity-60 mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section id="projects" className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Projetos em Destaque</h2>
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
                   <Github size={16}/> Código Fonte
                </a>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 text-center">
        <div className="flex justify-center gap-6 mb-6 opacity-60">
          <a href="https://github.com/felippefardin"><Github size={20}/></a>
          <a href="https://linkedin.com/in/felippefardin"><Linkedin size={20}/></a>
          <a href="mailto:felippe.andreata@example.com"><Mail size={20}/></a>
        </div>
        <p className="text-sm opacity-50">© 2025 Felippe Fardin Andreata | Desenvolvido com React & Tailwind</p>
      </footer>
    </div>
  );
}