import React from "react";
import { motion } from "framer-motion";

const announcements = [
  {
    title: "Parent-Teacher Meeting",
    date: "2025-07-05",
    message:
      "A parent-teacher meeting will be held on Friday, 5 July at 2:00 PM in the school hall.",
  },
  {
    title: "Winter School Break",
    date: "2025-06-28",
    message:
      "School will be closed from 28 June to 15 July for the winter holidays.",
  },
  {
    title: "Stationery Drive",
    date: "2025-07-10",
    message:
      "We're collecting stationery for underprivileged learners. Drop off items at the admin block by 10 July.",
  },
];

const Announcements = () => {
  return (
    <motion.section
      className="bg-white py-10 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">
          📢 Announcements
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((a, index) => (
            <motion.div
              key={index}
              className="bg-yellow-50 border border-yellow-300 rounded-lg shadow p-4 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong> {a.date}
              </p>
              <p className="text-gray-700">{a.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Announcements;
