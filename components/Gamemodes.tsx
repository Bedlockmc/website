import { motion } from 'framer-motion'
import { FaBed, FaFireAlt, FaHeart } from 'react-icons/fa'

const gamemodes = [
  {
    title: 'BedWars',
    description: 'Destroy beds and dominate.',
    icon: <FaBed className="text-red-500 text-3xl mb-2" />,
  },
  {
    title: 'Fireball Wars',
    description: 'PvP with fireballs only.',
    icon: <FaFireAlt className="text-yellow-400 text-3xl mb-2" />,
  },
  {
    title: 'Lifesteal SMP',
    description: 'Steal hearts. Survive.',
    icon: <FaHeart className="text-pink-500 text-3xl mb-2 animate-pulse" />,
  },
]

const Gamemodes = () => {
  return (
    <section id="gamemodes" className="py-24 px-6 text-center bg-[#0d0d0d]">
      <h2 className="text-4xl font-bold mb-12">🎮 Gamemodes</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center max-w-6xl mx-auto">
        {gamemodes.map((mode, i) => (
          <motion.div
            key={i}
            className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] hover:shadow-md hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            {mode.icon}
            <h3 className="text-xl font-semibold">{mode.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{mode.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Gamemodes
