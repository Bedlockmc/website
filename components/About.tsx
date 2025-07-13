import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 text-center bg-black">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        About Vortan
      </motion.h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Vortan MC is a black-themed, minimal Minecraft server offering high-quality PvP modes like BedWars, Fireball-only matches, and Lifesteal SMP. Built for players who want fast action and a clean aesthetic.
      </p>
    </section>
  );
};

export default About;
