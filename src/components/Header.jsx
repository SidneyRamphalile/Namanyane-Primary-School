// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import schoolHeroImage1 from "../assets/school-hero.jpg";
// import schoolHeroImage2 from "../assets/school-hero2.jpg";
// import schoolHeroImage3 from "../assets/school-hero3.jpg";

// const images = [schoolHeroImage1, schoolHeroImage2, schoolHeroImage3];

// const Header = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <header className="relative h-[300px] md:h-[450px] text-white text-center overflow-hidden">
//       <AnimatePresence>
//         <motion.div
//           key={currentIndex}
//           className="absolute inset-0 bg-center bg-cover bg-no-repeat"
//           style={{ backgroundImage: `url(${images[currentIndex]})` }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2 }}
//         />
//       </AnimatePresence>

//       <div className="absolute inset-0 bg-purple-900/50 backdrop-brightness-50"></div>

//       <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-lg">
//           Namanyane Primary School
//         </h1>
//         <p className="text-xl italic font-light drop-shadow">
//           “Thuto ke Lesedi” –{" "}
//           <span className="not-italic">Education is Light</span>
//         </p>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import schoolHeroImage1 from "../assets/school-hero.jpg";
import schoolHeroImage2 from "../assets/school-hero2.jpg";
import schoolHeroImage3 from "../assets/school-hero3.jpg";

const images = [schoolHeroImage1, schoolHeroImage2, schoolHeroImage3];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-[350px] md:h-[500px] text-white text-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-purple-900/50 backdrop-brightness-50"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-wide drop-shadow-lg">
          Welcome to Namanyane Primary School
        </h1>
        <p className="text-lg md:text-xl font-medium mb-1 drop-shadow-lg">
          Nurturing Young Minds for a Brighter Tomorrow
        </p>

        <p className="text-md italic font-light mb-6 drop-shadow-lg">
          <strong>“Thuto ke Lesedi”</strong> –{" "}
          <span className="not-italic">Education is Light</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-yellow-400 text-purple-900 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition duration-300"
            >
              Learn More
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-purple-900 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition duration-300"
            >
              Contact Us Today
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;



