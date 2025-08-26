import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const SwiperProjects = () => {
  const projects = [
    {
      id: 1,
      title: "CraftConnect",
      description: "Eine MyHammer-ähnliche Plattform für Handwerker und Kunden. Vollständige E-Commerce-Lösung mit Buchungssystem, Bewertungen und Zahlungsabwicklung.",
      image: "/assets/projects/craftconnect.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "CodeSnap",
      description: "Eine innovative Lern-App für verschiedene Berufe. Interaktive Kurse, Quiz-System und personalisierte Lernpfade mit KI-gestützten Empfehlungen.",
      image: "/assets/projects/codesnap.jpg",
      technologies: ["React Native", "Firebase", "TensorFlow", "Redux", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "Thomas-Scharli Facility",
      description: "Professionelle Unternehmenswebsite für Thomas-Scharli Facility and More. Modernes Design mit CMS-Integration und responsiver Darstellung.",
      image: "/assets/projects/thomas-scharli.png",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Corporate Website"
    },
    {
      id: 4,
      title: "E-Learning Platform",
      description: "Umfassende E-Learning-Plattform mit Video-Kursen, Live-Sessions und Zertifizierungssystem. Benutzerfreundliche Oberfläche für Lernende und Dozenten.",
      image: "/assets/projects/elearning.jpg",
      technologies: ["Vue.js", "Laravel", "WebRTC", "AWS S3", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Education"
    },
    {
      id: 5,
      title: "Authentication System",
      description: "Sicheres Authentifizierungssystem mit Multi-Faktor-Authentifizierung, OAuth-Integration und erweiterten Sicherheitsfunktionen.",
      image: "/assets/projects/auth-system.jpg",
      technologies: ["Next.js", "Auth0", "JWT", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Security"
    },
    {
      id: 6,
      title: "Blazor Web App",
      description: "Moderne Web-Anwendung entwickelt mit Microsoft Blazor. Server-Side Rendering mit C# und interaktive UI-Komponenten.",
      image: "/assets/projects/blazor-app.jpg",
      technologies: ["Blazor", "C#", ".NET Core", "SignalR", "Entity Framework"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application"
    }
  ]

  return (
    <section id="projects" className="section relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Meine Projekte
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entdecke meine neuesten Arbeiten und technischen Lösungen
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="glass-card overflow-hidden rounded-2xl hover-lift">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-400/20 backdrop-blur-sm text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:bg-pink-400/20 hover:border-pink-400/50 transition-colors"
                        >
                          <Github className="w-4 h-4 text-white" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-md border border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Project Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-pink-500 transition-all duration-300"
                      >
                        <span>Projekt ansehen</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-cyan-400 !bg-slate-800/50 !backdrop-blur-sm !border !border-slate-700/50 !rounded-full !w-12 !h-12 !left-4" />
          <div className="swiper-button-next !text-cyan-400 !bg-slate-800/50 !backdrop-blur-sm !border !border-slate-700/50 !rounded-full !w-12 !h-12 !right-4" />
        </div>
      </div>
    </section>
  )
}

export default SwiperProjects
