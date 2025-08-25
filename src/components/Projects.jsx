import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowRight, Sparkles, Users, BookOpen, Building2, Shield, Gamepad2, Code } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "CraftConnect",
      description: "Eine innovative Plattform wie MyHammer - verbindet Handwerker mit Kunden für qualitativ hochwertige Dienstleistungen",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      features: [
        "Handwerker-Profile mit Bewertungen und Referenzen",
        "Projekt-Ausschreibungen und Angebote-System",
        "Sichere Zahlungsabwicklung mit Stripe",
        "Echtzeit-Chat zwischen Kunden und Handwerkern",
        "Terminplanung und Kalender-Integration",
        "Bewertungs- und Review-System",
        "Mobile App für iOS und Android"
      ],
      image: "/assets/projects/accessories.jpg",
      category: "Marketplace",
      icon: Users,
      github: "https://github.com/username/craftconnect",
      live: "https://craftconnect-demo.com"
    },
    {
      id: 2,
      title: "CodeSnap",
      description: "Revolutionäre Lern-App für alle Berufe - interaktive Kurse, KI-gestützte Lernpfade und personalisierte Inhalte",
      technologies: ["React Native", "Node.js", "AI/ML", "PostgreSQL", "AWS"],
      features: [
        "KI-gestützte Lernpfade für jeden Beruf",
        "Interaktive Video-Kurse und Übungen",
        "Gamification mit Belohnungssystem",
        "Fortschritts-Tracking und Zertifikate",
        "Community-Features und Diskussionsforen",
        "Offline-Lernen mit Synchronisation",
        "Personalisiertes Lernen basierend auf KI-Analyse"
      ],
      image: "/assets/projects/codesnap.jpg",
      category: "Education",
      icon: BookOpen,
      github: "https://github.com/username/codesnap",
      live: "https://codesnap-demo.com"
    },
    {
      id: 3,
      title: "Thomas-Scharli Facility",
      description: "Professionelle Unternehmenswebsite für Facility Management - moderne Präsentation mit Service-Portfolio",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO"],
      features: [
        "Responsive Design für alle Geräte",
        "Service-Portfolio mit detaillierten Beschreibungen",
        "Kontaktformular mit Standort-Integration",
        "SEO-optimiert für bessere Sichtbarkeit",
        "Admin-Dashboard für Content-Management",
        "Blog-Sektion für Fachartikel",
        "Integration von Google Analytics und Maps"
      ],
      image: "/assets/projects/thomas-scharli.png",
      category: "Corporate",
      icon: Building2,
      github: "https://github.com/username/thomas-scharli",
      live: "https://thomas-scharli-facility.ch"
    },
    {
      id: 4,
      title: "Authentication System",
      description: "Sicheres Authentifizierungssystem mit JWT und OAuth für moderne Webanwendungen",
      technologies: ["React", "Node.js", "JWT", "OAuth", "Redis"],
      features: [
        "JWT Token Authentication",
        "OAuth 2.0 Integration (Google, GitHub)",
        "Role-based Access Control",
        "Password Reset mit Email-Verification",
        "Two-Factor Authentication (2FA)",
        "Session Management",
        "Security Audit Logging"
      ],
      image: "/assets/projects/auth-system.jpg",
      category: "Security",
      icon: Shield,
      github: "https://github.com/username/auth-system",
      live: "https://auth-demo.com"
    },
    {
      id: 5,
      title: "Game Engine",
      description: "3D Game Engine mit WebGL und Three.js für immersive Gaming-Erlebnisse",
      technologies: ["Three.js", "WebGL", "JavaScript", "Webpack", "Cannon.js"],
      features: [
        "3D Rendering Engine mit WebGL",
        "Physics Engine für realistische Bewegungen",
        "Asset Management System",
        "Scene Editor mit Drag & Drop",
        "Performance Optimization",
        "Multiplayer-Support",
        "VR/AR Integration"
      ],
      image: "/assets/projects/game-engine.jpg",
      category: "Gaming",
      icon: Gamepad2,
      github: "https://github.com/username/game-engine",
      live: "https://game-engine-demo.com"
    },
    {
      id: 6,
      title: "Blazor Web App",
      description: "Moderne Webanwendung mit Blazor und .NET Core für Enterprise-Lösungen",
      technologies: ["Blazor", ".NET Core", "C#", "SQL Server", "SignalR"],
      features: [
        "Server-side Rendering mit Blazor",
        "Real-time Updates mit SignalR",
        "Database Integration mit Entity Framework",
        "User Management und Rollen",
        "API Integration und Microservices",
        "Reporting und Analytics",
        "Deployment mit Azure"
      ],
      image: "/assets/projects/blazor-app.jpg",
      category: "Enterprise",
      icon: Code,
      github: "https://github.com/username/blazor-app",
      live: "https://blazor-demo.com"
    }
  ]

  return (
    <section id="work" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-neon-cyan mb-4"
          >
            <Sparkles size={20} />
            <span className="text-sm font-medium">Meine Projekte</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meine <span className="gradient-text">Projekte</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Eine Auswahl meiner besten Arbeiten und innovativen Lösungen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Icon */}
                <div className="absolute top-4 left-4">
                  <div className="bg-neon-cyan/20 backdrop-blur-sm rounded-lg p-2">
                    <project.icon size={20} className="text-neon-cyan" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neon-cyan font-medium">{project.category}</span>
                  <ArrowRight size={16} className="text-dark-400 group-hover:text-neon-cyan transition-colors" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-800/50 backdrop-blur-sm text-xs text-dark-300 rounded border border-neon-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-dark-800/50 backdrop-blur-sm text-xs text-dark-300 rounded border border-neon-cyan/20">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 glass-card rounded-full flex items-center justify-center text-white hover:bg-dark-800/50 transition-colors"
                >
                  ×
                </button>
                
                {/* Category Icon */}
                <div className="absolute top-4 left-4">
                  <div className="bg-neon-cyan/20 backdrop-blur-sm rounded-lg p-2">
                    <selectedProject.icon size={20} className="text-neon-cyan" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <span className="text-sm text-neon-cyan font-medium">{selectedProject.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{selectedProject.title}</h3>
                  <p className="text-dark-400 mt-3">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-dark-300">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologien</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-800/50 backdrop-blur-sm text-sm text-dark-300 rounded-lg border border-neon-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
