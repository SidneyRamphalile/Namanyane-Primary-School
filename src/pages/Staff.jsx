import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import grade1teacherImage from "../assets/Mrs Pule.jpg";
import grade2teacherImage from "../assets/Mrs Seitshero.png";
import grade3teacherImage from "../assets/Mrs Selesho.jpg";
import grade4teacherImage from "../assets/Mr Mosoetsa.jpg";
import grade5teacherImage from "../assets/Mrs Seitshero.png";
import grade6teacherImage from "../assets/Mrs Malefane.jpg";
import grade7teacherImage from "../assets/Mrs Gailele.png";
import adminClerkImage from "../assets/Mrs Kele.jpg";
import janitorImage from "../assets/Mrs Mekgwe.jpg";
import generalWorkerImage from "../assets/Mr Mototo.jpg";
import gradeRTeacherImage from "../assets/Mrs Seapolelo.jpg";
import gradeRTeacher2Image from "../assets/Mrs Tumi.jpg";



const staffMembers = [
  {
    name: "Mrs. K.G Pule",
    role: "Grade 1 Teacher",
    image: grade1teacherImage,
  },
  {
    name: "Mrs. S.C Seitshiro",
    role: "Grade 2 Teacher",
    image: grade2teacherImage,
  },
  {
    name: "Mrs. K.M Selesho",
    role: "Grade 3 Teacher",
    image: grade3teacherImage,
  },
  {
    name: "Mr. L.I Mosoetsa",
    role: "Grade 4 Class Teacher",
    image: grade4teacherImage,
  },
  {
    name: "Mr. H.K Botipe",
    role: "Grade 5 Class Teacher",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    name: "Mrs. K.A Malefane",
    role: "Grade 6 Class Teacher",
    image: grade6teacherImage,
  },
  {
    name: "Mrs. K.M Gailele",
    role: "Grade 7 Class Teacher",
    image: grade7teacherImage,
  },
  {
    name: "Mrs. Kele",
    role: "Admin Clerk",
    image: adminClerkImage,
  },
  {
    name: "Mrs. Mekgwe",
    role: "Janitor",
    image: janitorImage,
  },
  {
    name: "Mr. Mototo",
    role: "General Worker",
    image: generalWorkerImage,
  },
  {
    name: "Mrs. T.M Seapolelo",
    role: "Grade R Teacher",
    image:gradeRTeacherImage,
  },
  {
    name: "Mrs. F.T Madikgetla",
    role: "Grade R Teacher",
    image: gradeRTeacher2Image,
  },
];

const Staff = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1
        className="text-3xl font-bold mb-10 text-center text-purple-800"
        data-aos="fade-down"
      >
        Our Staff
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={staff.image}
              alt={staff.name}
              className="w-64 h-80 object-cover mx-auto mb-5 border border-gray-200 shadow-sm rounded-xl"
            />
            <p className="text-lg font-semibold text-gray-800">{staff.name}</p>
            <p className="text-gray-600 mt-1">{staff.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
