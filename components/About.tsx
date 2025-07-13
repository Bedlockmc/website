'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 text-center bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          What is Vortan MC?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Vortan is a next-gen Minecraft PvP server offering competitive BedWars, explosive Fireball-only matches, and a brutal Lifesteal SMP where survival means stealing hearts.
        </motion.p>
      </div>
    </section>
  )
}
