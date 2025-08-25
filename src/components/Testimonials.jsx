import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Müller",
      position: "Geschäftsführerin, TechStart GmbH",
      text: "Die Zusammenarbeit mit Nico war ein absoluter Genuss. Die Aufmerksamkeit für Details und die innovativen Lösungen haben unsere Erwartungen übertroffen. Das Endergebnis hat nicht nur unsere Geschäftsziele erreicht, sondern übertroffen.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Schmidt",
      position: "Gründer, FashionForward",
      text: "Das Niveau der technischen Expertise und der kreativen Problemlösungsfähigkeiten ist außergewöhnlich. Unsere E-Commerce-Plattform verzeichnete eine 40%ige Steigerung der Conversion-Raten innerhalb des ersten Monats nach dem Launch.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Weber",
      position: "CTO, HealthTech Solutions",
      text: "Außergewöhnliche Kommunikation und Projektmanagement-Fähigkeiten. Der Entwicklungsprozess war reibungslos, transparent und wurde pünktlich geliefert. Sehr empfehlenswert für jedes komplexe Webentwicklungsprojekt.",
      rating: 5
    },
    {
      id: 4,
      name: "David Hoffmann",
      position: "CEO, FinTech Innovations",
      text: "Nico hat unsere Banking-App in Rekordzeit entwickelt. Die biometrische Sicherheit und die intuitive Benutzeroberfläche haben unsere Kunden begeistert. Ein echter Profi!",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Wagner",
      position: "Marketing Director, Luxury Brands",
      text: "Die AR-Try-On Features und die personalisierten Empfehlungen haben unsere Conversion-Rate um 60% gesteigert. Nico versteht, wie man Luxus digital erlebbar macht.",
      rating: 5
    },
    {
      id: 6,
      name: "Thomas Fischer",
      position: "Head of IT, Enterprise Solutions",
      text: "Die Microservices-Architektur, die Nico für uns entwickelt hat, ist skalierbar, sicher und performant. Ein Meisterwerk der modernen Software-Entwicklung.",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="section bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kunden<span className="gradient-text">referenzen</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Was meine Kunden über unsere Zusammenarbeit sagen. 
            Authentische Bewertungen von erfolgreichen Projekten.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="card text-center p-8 md:p-12"
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-500" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-dark-300 leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Author */}
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-white">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-primary-500 font-medium">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-dark-800 rounded-full hover:bg-primary-500/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-500 scale-125' 
                      : 'bg-dark-600 hover:bg-dark-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-dark-800 rounded-full hover:bg-primary-500/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Grid (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:grid lg:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="card p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-sm text-dark-300 mb-4 italic">
                "{testimonial.text.substring(0, 120)}..."
              </p>
              <div>
                <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                <p className="text-primary-500 text-xs">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
            <div className="text-sm text-dark-400">Zufriedene Kunden</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">50+</div>
            <div className="text-sm text-dark-400">Projekte abgeschlossen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">4.9/5</div>
            <div className="text-sm text-dark-400">Durchschnittliche Bewertung</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">24/7</div>
            <div className="text-sm text-dark-400">Support verfügbar</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
