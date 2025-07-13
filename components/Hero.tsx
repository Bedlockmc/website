import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-sm pointer-events-none">
        <Image src="/server-icon.png" alt="Icon" width={400} height={400} />
      </div>

      <motion.h1
        className="text-6xl md:text-7xl font-extrabold z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Vortan <span className="text-white/40">MC</span>
      </motion.h1>

      <motion.p
        className="text-gray-400 text-lg mt-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Competitive BedWars, Fireball PvP & Lifesteal SMP
      </motion.p>

      <motion.div className="mt-6 flex gap-4 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <a
          href="#connect"
          className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          🌐 Connect
        </a>
        <a
          href="https://discord.gg/YOUR_CODE"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#5865f2] px-6 py-3 rounded-full hover:bg-[#4752c4] transition"
        >
          💬 Discord
        </a>
      </motion.div>
    </section>
  )
}
