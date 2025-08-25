import { motion } from "motion/react";

const Certificates = () => {
  const certificates = [
    {
      title: "Python Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      category: "Python Programming",
      icon: "🐍",
      file: "assets/certificates/Python_Essentials_1_certificate_nico-merkel-online-de_72ebde72-a0f6-49bb-bc7d-35d8cf92c3c8.pdf"
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      category: "Frontend Development",
      icon: "⚡",
      file: "assets/certificates/JavaScript_Essentials_1_certificate_nico-merkel-online-de_28ef6ddf-d8bd-4eec-bc1b-6d035e1545c3.pdf"
    },
    {
      title: "HTML & CSS",
      issuer: "Cisco Networking Academy",
      category: "Web Development",
      icon: "🌐",
      file: "assets/certificates/HTML&CSS_certificate.pdf"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      category: "Cybersecurity",
      icon: "🔒",
      file: "assets/certificates/Introduction_to_Cybersecurity_certificate_nico-merkel-online-de_dec778ce-ec32-4e72-a50c-d288103481fd.pdf"
    },
    {
      title: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      category: "Security Testing",
      icon: "🕵️",
      file: "assets/certificates/Ethical_Hacker_certificate_nico-merkel-online-de_76d89ea0-525a-401f-b60d-d6d712f99310.pdf"
    },
    {
      title: "Web Development",
      issuer: "Cisco Networking Academy",
      category: "Full-Stack Development",
      icon: "💻",
      file: "assets/certificates/_certificate_nico-merkel-online-de_baec75aa-03aa-4f89-8e4c-7a7ae5dad3bd (1).pdf"
    }
  ];

  return (
    <section className="c-space section-spacing" id="certificates">
      <h2 className="text-heading">Zertifikate & Qualifikationen</h2>
      <p className="text-center text-neutral-400 mb-12">
        Professionelle Weiterbildung und Expertise
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-primary border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{cert.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-3">
                  {cert.issuer}
                </p>
                <span className="inline-block bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full mb-4">
                  {cert.category}
                </span>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-lavender hover:text-white transition-colors"
                >
                  <span>Zertifikat ansehen</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
