// components/About.tsx
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 text-center bg-black">
      <motion.h2
        {...{
          className: "text-4xl font-bold mb-4",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.6 }
        }}
      >
        About Vortan
      </motion.h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Vortan MC is a competitive Minecraft PvP network featuring BedWars,
        Fireball-only gamemodes, and intense Lifesteal survival. Join now and rule the arena.
      </p>
    </section>
  )
}
