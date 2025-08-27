import React from "react";
import { motion } from "framer-motion";

const facts = [
  {
    title: "🌍 Did You Know?",
    fact: "The Earth rotates at about 1,670 kilometers per hour - but we don't feel it!",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    title: "🧠 Brain Fact",
    fact: "A child's brain can form over 1 million new neural connections every second!",
    image: "https://cdn-icons-png.flaticon.com/512/3159/3159066.png",
  },
  {
    title: "📚 Reading Power",
    fact: "Reading 20 minutes a day exposes kids to 1.8 million words per year!",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
  },
  {
    title: "🌱 Plants Breathe",
    fact: "Plants take in carbon dioxide and release oxygen - which we breathe!",
    image: "https://cdn-icons-png.flaticon.com/512/2907/2907281.png",
  },
  {
    title: "🐝 Bee Smart!",
    fact: "Bees communicate with each other using a special 'waggle dance'.",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    title: "🦴 Bones in Your Body",
    fact: "You were born with about 300 bones, but adults only have 206!",
    image: "https://cdn-icons-png.flaticon.com/512/1766/1766759.png",
  },
];

const FunFacts = () => {
  return (
    <section className="bg-gradient-to-br from-black via-purple-900 to-indigo-900 py-12 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
          🎉 Fun & Interesting Facts
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-800 p-6 rounded-xl shadow-lg border border-purple-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-pointer transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 260,
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain mx-auto mb-4 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              />
              <h3 className="text-lg font-semibold text-white mb-2 text-center drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">
                {item.title}
              </h3>
              <p className="text-gray-200 text-center">{item.fact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
