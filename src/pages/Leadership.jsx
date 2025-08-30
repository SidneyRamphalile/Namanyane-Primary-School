import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Manually import images from local assets folder
import principalImage from "../assets/principal.jpg";
import deputyImage from "../assets/Mrs Seitshero.png";
import hodImage from "../assets/Mrs Seapolelo.jpg";

function Leadership() {
  const leaders = [
    {
      name: "Principal K.M Tsoeu",
      role: "Principal",
      image: principalImage,
    },
    {
      name: "Mrs S.C Seitshiro",
      role: "Deputy Principal",
      image: deputyImage,
    },
    {
      name: "Mrs. T.M Seapolelo",
      role: "Head of Department",
      image: hodImage,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1
        className="text-3xl font-bold mb-10 text-center text-purple-800"
        data-aos="fade-down"
      >
        Leadership
      </h1>

      {/* Staff Leadership Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-60 h-72 object-cover mx-auto mb-5 border border-gray-200 shadow-sm rounded-lg"
            />
            <div className="text-xl font-semibold">{leader.name}</div>
            <div className="text-gray-600 mt-1">{leader.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leadership;
