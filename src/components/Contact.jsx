import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nico.merkel@online.de",
      link: "mailto:nico.merkel@online.de"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "015783987309",
      link: "tel:015783987309"
    },
    {
      icon: MapPin,
      title: "Standort",
      value: "Deutschland",
      link: null
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nico-merkel/",
      icon: "💼"
    },
    {
      name: "GitHub",
      url: "https://github.com/iTeLLiiX",
      icon: "🐙"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/4915783987309",
      icon: "💬"
    }
  ]

  return (
    <section id="contact" className="section bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kontakt <span className="gradient-text">aufnehmen</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Bereit für Ihr nächstes Projekt? Lassen Sie uns gemeinsam 
            Ihre Vision in die Realität umsetzen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Lassen Sie uns sprechen
              </h3>
              <p className="text-dark-300 leading-relaxed mb-8">
                Ich bin immer offen für neue Herausforderungen und spannende Projekte. 
                Kontaktieren Sie mich gerne für ein unverbindliches Gespräch über 
                Ihre Anforderungen.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary-500 hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-dark-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center text-2xl hover:bg-primary-500/20 transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Nachricht senden
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="ihre.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Betreff *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Projektanfrage"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anforderungen..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30' 
                      : 'bg-red-500/20 border border-red-500/30'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className={
                    submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                  }>
                    {submitStatus === 'success' 
                      ? 'Ihre Nachricht wurde erfolgreich gesendet!' 
                      : 'Etwas ist schiefgelaufen! Bitte versuchen Sie es erneut.'
                    }
                  </span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Nachricht senden
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
