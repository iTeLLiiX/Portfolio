
import { motion } from 'framer-motion'
import FlipCard from './FlipCard'

const Skills = () => {
  const skillsData = [
    {
      front: {
        title: "Frontend Development",
        description: "React, Next.js, TypeScript"
      },
      back: {
        title: "Frontend Expertise",
        description: "Building responsive, modern web applications with React ecosystem, TypeScript for type safety, and Next.js for optimal performance and SEO.",
        icon: "⚛️"
      },
      icon: "🎨",
      color: "#00ffff"
    },
    {
      front: {
        title: "Backend Development",
        description: "Node.js, Python, APIs"
      },
      back: {
        title: "Backend Mastery",
        description: "Developing scalable server-side applications with Node.js, Python frameworks, RESTful APIs, and database management systems.",
        icon: "⚙️"
      },
      icon: "🔧",
      color: "#ff69b4"
    },
    {
      front: {
        title: "E-Commerce",
        description: "Shopify, Payment Integration"
      },
      back: {
        title: "E-Commerce Solutions",
        description: "Creating complete online stores with Shopify, implementing payment gateways, inventory management, and customer experience optimization.",
        icon: "🛒"
      },
      icon: "💰",
      color: "#ff6b35"
    },
    {
      front: {
        title: "Mobile Development",
        description: "React Native, Flutter"
      },
      back: {
        title: "Mobile Apps",
        description: "Building cross-platform mobile applications with React Native and Flutter, ensuring native performance and user experience.",
        icon: "📱"
      },
      icon: "📱",
      color: "#4ade80"
    },
    {
      front: {
        title: "Cloud & DevOps",
        description: "AWS, Docker, CI/CD"
      },
      back: {
        title: "Cloud Infrastructure",
        description: "Deploying and managing applications on cloud platforms, implementing CI/CD pipelines, and ensuring scalable infrastructure.",
        icon: "☁️"
      },
      icon: "☁️",
      color: "#8b5cf6"
    },
    {
      front: {
        title: "AI & Machine Learning",
        description: "TensorFlow, Python"
      },
      back: {
        title: "AI Development",
        description: "Implementing machine learning models, computer vision applications, and AI-powered features using TensorFlow and Python.",
        icon: "🤖"
      },
      icon: "🤖",
      color: "#f59e0b"
    }
  ]

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Was ich kann
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Von Frontend bis Backend, von Mobile bis Cloud - ich erstelle vollständige digitale Lösungen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <FlipCard
              key={index}
              front={skill.front}
              back={skill.back}
              icon={skill.icon}
              color={skill.color}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Technische Fähigkeiten
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB",
              "PostgreSQL", "AWS", "Docker", "Git", "Tailwind CSS", "Framer Motion"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4 rounded-lg text-center hover-lift"
              >
                <span className="text-sm font-medium text-white">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
