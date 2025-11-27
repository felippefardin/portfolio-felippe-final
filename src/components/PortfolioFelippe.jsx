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

  // --- PROJETOS / LABS DE CIBERSEGURANÇA ---
  const projects = [
    {
      id: 1,
      title: 'Wazuh – SIEM Básico',
      tags: ['SIEM', 'Blue Team', 'Monitoramento'],
      description: 'Criação de alertas, análise de logs e investigação de eventos simulados utilizando o Wazuh para detecção de ameaças.',
      image: null, // Placeholder será usado
      repo: 'https://github.com/felippefardin', // Ajuste se tiver repo específico
      live: '#'
    },
    {
      id: 2,
      title: 'Análise de Tráfego (Wireshark)',
      tags: ['Forensics', 'Redes', 'Análise de Pacotes'],
      description: 'Identificação de pacotes suspeitos, análise de protocolos e detecção de comportamentos anômalos na rede.',
      image: null,
      repo: 'https://github.com/felippefardin',
      live: '#'
    },
    {
      id: 3,
      title: 'Scan de Vulnerabilidades',
      tags: ['OpenVAS', 'Nessus', 'Gestão de Vuln'],
      description: 'Execução de scans em ambientes controlados, classificação CVSS e elaboração de relatórios com recomendações de correção.',
      image: null,
      repo: 'https://github.com/felippefardin',
      live: '#'
    },
    {
      id: 4,
      title: 'Mapeamento com Nmap',
      tags: ['Recon', 'Redes', 'Segurança Ofensiva'],
      description: 'Varredura de portas, fingerprint de serviços e análise de superfície de exposição para hardening.',
      image: null,
      repo: 'https://github.com/felippefardin',
      live: '#'
    },
    {
      id: 5,
      title: 'Labs TryHackMe',
      tags: ['SOC Level 1', 'Pre-Security', 'Treinamento'],
      description: 'Conclusão de trilhas práticas focadas em fundamentos de defesa, resposta a incidentes e segurança ofensiva básica.',
      image: null,
      repo: 'https://tryhackme.com', // Pode colocar seu perfil do THM
      live: '#'
    },
    // Projetos de Dev mantidos como complementares
    {
      id: 6,
      title: 'App Controle de Contas',
      tags: ['DevSec', 'PHP', 'Full Stack'],
      description: 'Sistema web com foco em boas práticas de desenvolvimento seguro e controle de acesso.',
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
              <div className="text-xs opacity-70">Analista de Cibersegurança / SOC</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">Sobre</a>
            <a href="#experience" className="hover:underline">Experiência</a>
            <a href="#projects" className="hover:underline">Labs & Projetos</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contato</a>
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
                Defendendo infraestruturas e analisando ameaças.
              </h1>
              <p className="mt-4 text-lg max-w-xl text-gray-600 dark:text-gray-300">
                Profissional de Tecnologia com pós-graduação em Cibersegurança. 
                Especialista em análise de vulnerabilidades, monitoramento de redes e resposta a incidentes.
                Busco atuar como <strong>Analista de Cibersegurança / SOC N1</strong>.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Ver Labs e Projetos</a>
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Entrar em Contato</a>
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
              Sobre e Formação
            </motion.h2>
            
            <motion.div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p>
                Possuo conhecimentos sólidos em redes, Linux, análise de vulnerabilidades e fundamentos de SOC. 
                Minha experiência prévia em desenvolvimento me permite ter uma visão aprofundada sobre segurança de aplicações e código seguro.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">🎓 Formação Acadêmica</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <strong>Pós-Graduação em Cibersegurança</strong>
                      <div className="text-xs opacity-75">Instituição (Ano)</div>
                    </li>
                    <li>
                      <strong>Análise e Desenvolvimento de Sistemas</strong>
                      <div className="text-xs opacity-75">Universidade Vila Velha (UVV)</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">🌍 Idiomas</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between"><span>Português</span> <span className="opacity-70">Fluente</span></li>
                    <li className="flex justify-between"><span>Inglês</span> <span className="opacity-70">Intermediário</span></li>
                    <li className="flex justify-between"><span>Espanhol</span> <span className="opacity-70">Básico</span></li>
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
              Experiência Profissional
            </motion.h2>

            <motion.div className="grid md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.article className="p-6 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900/40 shadow-sm" variants={item}>
                <h3 className="font-semibold text-xl">Prefeitura Municipal da Serra</h3>
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-4">Estagiário de TI (2023 – atual)</div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Suporte técnico e manutenção de sistemas internos com foco em segurança e integridade.</li>
                  <li>Análise de logs, acompanhamento de acessos e monitoramento básico de eventos.</li>
                  <li>Configuração e organização de ativos de rede e gestão de usuários.</li>
                  <li>Resolução de incidentes de TI, aplicando boas práticas de segurança.</li>
                  <li>Atuação com sistemas web e APIs, reforçando conhecimentos em segurança de aplicações.</li>
                </ul>
              </motion.article>

              <motion.article className="p-6 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900/40 shadow-sm opacity-80" variants={item}>
                <h3 className="font-semibold text-xl">Fardin Móveis</h3>
                <div className="text-sm text-gray-500 mb-4">Gerente Administrativo & Vendas (2012 - 2020)</div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Gestão de processos financeiros e administrativos.</li>
                  <li>Organização de documentação e suporte à equipe de vendas.</li>
                  <li>Resolução de problemas e atendimento ao cliente.</li>
                </ul>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800/30">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold mb-8" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Habilidades & Tecnologias
            </motion.h2>

            <motion.div className="grid sm:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {/* Card 1: Cyber Core */}
              <motion.div className="p-6 rounded-lg bg-white dark:bg-gray-900/60 border dark:border-gray-700 shadow-sm hover:shadow-md transition" variants={item}>
                <div className="mb-4 p-2 bg-red-100 dark:bg-red-900/30 w-fit rounded text-red-600 dark:text-red-400">
                  <Shield size={24} />
                </div>
                <h4 className="font-bold mb-3">Cibersegurança & Defesa</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>Fundamentos de SOC e Blue Team</li>
                  <li>Segurança de Redes (TCP/IP, DNS, HTTP)</li>
                  <li>Linux (Permissões, Serviços, Hardening)</li>
                  <li>OWASP Top 10 & Análise de Vuln.</li>
                  <li>Resposta a Incidentes</li>
                </ul>
              </motion.div>

              {/* Card 2: Tools */}
              <motion.div className="p-6 rounded-lg bg-white dark:bg-gray-900/60 border dark:border-gray-700 shadow-sm hover:shadow-md transition" variants={item}>
                <div className="mb-4 p-2 bg-blue-100 dark:bg-blue-900/30 w-fit rounded text-blue-600 dark:text-blue-400">
                  <Terminal size={24} />
                </div>
                <h4 className="font-bold mb-3">Ferramentas & SIEM</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li><strong>Nmap</strong> (Mapeamento de Rede)</li>
                  <li><strong>Wireshark</strong> (Análise de Tráfego)</li>
                  <li><strong>Burp Suite</strong> (Web Security)</li>
                  <li><strong>OpenVAS / Nessus</strong> (Scans)</li>
                  <li><strong>Wazuh</strong> (SIEM - Alertas e Logs)</li>
                </ul>
              </motion.div>

              {/* Card 3: Dev & Infra */}
              <motion.div className="p-6 rounded-lg bg-white dark:bg-gray-900/60 border dark:border-gray-700 shadow-sm hover:shadow-md transition" variants={item}>
                <div className="mb-4 p-2 bg-purple-100 dark:bg-purple-900/30 w-fit rounded text-purple-600 dark:text-purple-400">
                  <Server size={24} />
                </div>
                <h4 className="font-bold mb-3">Dev & Infraestrutura</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>PHP (Laravel), JavaScript, HTML, CSS</li>
                  <li>SQL / MySQL</li>
                  <li>Git e GitHub</li>
                  <li>React (Básico) & APIs RESTful</li>
                  <li>Suporte Técnico e Infraestrutura</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects / Labs */}
        <section id="projects" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 className="text-2xl font-bold mb-8" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Labs & Projetos Práticos
            </motion.h2>

            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {projects.map(p => (
                <motion.article 
                  key={p.id} 
                  className="rounded-xl overflow-hidden bg-white dark:bg-gray-900/40 border dark:border-gray-800 hover:border-blue-500/50 transition duration-300" 
                  variants={item}
                >
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative">
                     {/* Se tiver imagem, mostra, senão mostra icone baseado no titulo */}
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
                        <ExternalLink size={12}/> Detalhes
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
              Vamos Conversar?
            </motion.h2>

            <motion.form 
              className="mt-6 grid gap-4" 
              action="https://formspree.io/f/mrbowjvr" 
              method="POST"
            >
              <input name="name" placeholder="Seu nome" required className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/40 focus:ring-2 focus:ring-blue-500 outline-none transition" />
              <input name="email" type="email" placeholder="Seu e-mail" required className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/40 focus:ring-2 focus:ring-blue-500 outline-none transition" />
              <textarea name="message" placeholder="Sua mensagem..." required className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/40 h-32 focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <button type="submit" className="w-full sm:w-auto px-6 py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Enviar Mensagem</button>
                <div className="text-sm opacity-70">Ou envie um e-mail para <a href="mailto:felippefardin@gmail.com" className="underline text-blue-600 dark:text-blue-400">felippefardin@gmail.com</a></div>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-8">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm opacity-60">
            <p>© 2025 Felippe Fardin Andreata. Portfólio atualizado com foco em Cibersegurança.</p>
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
                  <span className="sr-only">Fechar</span>
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
                  Este projeto demonstra competências práticas essenciais para a função de Analista de SOC, focando na identificação, análise e mitigação de riscos.
                </p>
              </div>

              <div className="mt-8 flex gap-4 pt-6 border-t dark:border-gray-800">
                {activeProject.repo && (
                  <a href={activeProject.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm font-medium">
                    Ver Repositório
                  </a>
                )}
                <button onClick={() => setActiveProject(null)} className="ml-auto text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}