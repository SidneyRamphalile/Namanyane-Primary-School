import React from "react";
import { motion } from "framer-motion";
import schoolLogo from "../assets/school-logo.jpg";

const coreValues = [
  "Excellence",
  "Commitment",
  "Integrity",
  "Openness & Transparency",
  "Service Standard",
  "Reliability",
  "Respect",
  "Simplicity",
  "Effectiveness",
  "Humility",
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function Values() {
  return (
    <motion.section
      className="py-12 px-4 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-purple-800 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Corporate Values
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Animated Logo */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={schoolLogo}
            alt="School Logo"
            className="w-full max-w-sm md:max-w-full md:h-[400px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Animated Values List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition text-center text-gray-800 font-medium"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              {value}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Values;
