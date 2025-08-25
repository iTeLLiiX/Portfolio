import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, ExternalLink } from 'lucide-react'

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const certificates = [
    {
      id: 1,
      title: "Python Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      category: "Python Programming",
      icon: "🐍",
      file: "assets/certificates/Python_Essentials_1_certificate_nico-merkel-online-de_72ebde72-a0f6-49bb-bc7d-35d8cf92c3c8.pdf"
    },
    {
      id: 2,
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      category: "Frontend Development",
      icon: "⚡",
      file: "assets/certificates/JavaScript_Essentials_1_certificate_nico-merkel-online-de_28ef6ddf-d8bd-4eec-bc1b-6d035e1545c3.pdf"
    },
    {
      id: 3,
      title: "HTML & CSS",
      issuer: "Cisco Networking Academy",
      category: "Web Development",
      icon: "🌐",
      file: "assets/certificates/HTML&CSS_certificate.pdf"
    },
    {
      id: 4,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      category: "Cybersecurity",
      icon: "🔒",
      file: "assets/certificates/Introduction_to_Cybersecurity_certificate_nico-merkel-online-de_dec778ce-ec32-4e72-a50c-d288103481fd.pdf"
    },
    {
      id: 5,
      title: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      category: "Security Testing",
      icon: "🕵️",
      file: "assets/certificates/Ethical_Hacker_certificate_nico-merkel-online-de_76d89ea0-525a-401f-b60d-d6d712f99310.pdf"
    },
    {
      id: 6,
      title: "Web Development Fundamentals",
      issuer: "Cisco Networking Academy",
      category: "Full-Stack Development",
      icon: "💻",
      file: "assets/certificates/_certificate_nico-merkel-online-de_baec75aa-03aa-4f89-8e4c-7a7ae5dad3bd (1).pdf"
    }
  ]

  const handleDownload = (filePath) => {
    const link = document.createElement('a')
    link.href = filePath
    link.download = filePath.split('/').pop()
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="certificates" className="section bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meine <span className="gradient-text">Zertifikate</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Offizielle Zertifizierungen von Cisco Networking Academy, die meine 
            Expertise in verschiedenen Technologiebereichen bestätigen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:border-primary-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{cert.icon}</div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDownload(cert.file)}
                  className="p-2 bg-dark-800 rounded-lg hover:bg-primary-500/20 transition-colors"
                  title="Zertifikat herunterladen"
                >
                  <Download size={16} className="text-primary-500" />
                </motion.button>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="space-y-2">
                  <p className="text-sm text-dark-400">
                    <span className="font-medium text-dark-300">Aussteller:</span> {cert.issuer}
                  </p>
                  <p className="text-sm text-dark-400">
                    <span className="font-medium text-dark-300">Kategorie:</span> {cert.category}
                  </p>
                </div>

                <div className="pt-2 border-t border-dark-700">
                  <span className="inline-flex items-center gap-1 text-xs text-primary-500 font-medium">
                    <ExternalLink size={12} />
                    PDF verfügbar
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-dark-800/50 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">
              Kontinuierliche Weiterbildung
            </h3>
            <p className="text-dark-300">
              Diese Zertifikate sind Teil meiner kontinuierlichen Weiterbildung und 
              zeigen mein Engagement für die neuesten Technologien und Best Practices 
              in der Softwareentwicklung.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
