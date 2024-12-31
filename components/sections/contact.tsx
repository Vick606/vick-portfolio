// components/sections/contact.tsx
"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Github, 
  Linkedin, 
  Mail,
  ExternalLink
} from "lucide-react"

const contactLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/MoncefDj",
    username: "@MoncefDj"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/moncef-djezzar/",
    username: "Moncef Djezzar"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:djezzar.moncef@univ-ouargla.dz",
    username: "djezzar.moncef@univ-ouargla.dz"
  }
]

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. 
            Feel free to reach out through any of these platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex"
                >
                  <Button
                    variant="outline"
                    className="w-full h-32 p-4 hover:bg-primary hover:text-primary-foreground text-base flex flex-col items-center justify-center gap-2"
                    asChild
                  >
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
                      <link.icon className="h-6 w-6" />
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-sm text-muted-foreground break-words whitespace-normal">
                          {link.username}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 opacity-50" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 text-muted-foreground"
        >
          <p>Based in Ouargla, Algeria • Available for Remote Work</p>
        </motion.div>
      </div>
    </section>
  )
}