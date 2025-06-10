import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const staffMembers = [
  {
    name: "Mrs. K Pule",
    role: "Grade 1 Teacher",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    name: "Mr. Daniel Mokoena",
    role: "Grade 2 Teacher",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140058.png",
  },
  {
    name: "Miss Fatima Hassan",
    role: "Grade 3 Teacher",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
  },
  {
    name: "Mr. Themba Ndlovu",
    role: "Mathematics Teacher",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140058.png",
  },
  {
    name: "Mrs. Zanele Khumalo",
    role: "Life Skills Teacher",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    name: "Mr. Sipho Dlamini",
    role: "Science Teacher",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140058.png",
  },
  {
    name: "Miss Lebo Mahlangu",
    role: "Admin Assistant",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
  },
  {
    name: "Mrs. Thandiwe Maseko",
    role: "Secretary",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    name: "Mr. Isaac Molefe",
    role: "Janitor",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140058.png",
  },
  {
    name: "Miss Asanda Mhlongo",
    role: "General Worker",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
  },
  {
    name: "Mrs. Palesa Motsoeneng",
    role: "Grade R Teacher",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    name: "Mr. Bongani Zulu",
    role: "Security",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140058.png",
  },
  {
    name: "Miss Asanda Mhlongo",
    role: "General Worker",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
  },
  {
    name: "Mrs. Palesa Motsoeneng",
    role: "Grade R Teacher",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    name: "Mr. Bongani Zulu",
    role: "Security",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140058.png",
  },
  {
    name: "Miss Asanda Mhlongo",
    role: "General Worker",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
  },
  {
    name: "Mrs. Palesa Motsoeneng",
    role: "Grade R Teacher",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    name: "Mr. Bongani Zulu",
    role: "Security",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140058.png",
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
              className="w-40 h-48 object-cover mx-auto mb-5 border border-gray-200 shadow-sm rounded-lg"
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
