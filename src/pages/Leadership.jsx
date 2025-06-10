import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Manually import images from local assets folder
import principalImage from "../assets/principal.jpg";
import deputyImage from "../assets/department-head.jpg";

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
      image: "https://cdn-icons-png.flaticon.com/512/706/706827.png",
    },
  ];

  const studentLeaders = [
    {
      name: "Michael Thompson",
      role: "Head Boy 2025",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      name: "Emily Carter",
      role: "Head Girl 2025",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
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
              className="w-40 h-48 object-cover mx-auto mb-5 border border-gray-200 shadow-sm rounded-lg"
            />
            <div className="text-xl font-semibold">{leader.name}</div>
            <div className="text-gray-600 mt-1">{leader.role}</div>
          </div>
        ))}
      </div>

      {/* Head Boy and Head Girl Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {studentLeaders.map((student, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-8 w-full md:w-1/2 max-w-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-40 h-48 object-cover mx-auto mb-6 border-4 border-purple-200 rounded-lg"
            />
            <div className="text-xl font-semibold">{student.name}</div>
            <div className="text-purple-600 font-medium mt-1">
              {student.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leadership;
