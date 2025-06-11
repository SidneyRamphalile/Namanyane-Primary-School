import React from "react";
import missionImage from "../assets/our-mission.jpg"; // Make sure this file exists

const visionImage =
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80";

function VisionMission() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid gap-12 md:grid-cols-2 items-center">
      {/* Vision */}
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-6"
        data-aos="fade-up"
      >
        <div className="text-center md:text-left" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-purple-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 max-w-md mx-auto md:mx-0">
            Our vision aims to prepare and produce learners who are responsible
            citizens in their communities, possess knowledge, appropriate
            skills, and become successful to be promoted to upper grades.
          </p>
        </div>
        <img
          src={visionImage}
          alt="Vision"
          className="w-full max-w-sm rounded-lg shadow-lg object-cover"
          data-aos="zoom-in"
        />
      </div>

      {/* Mission */}
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-6"
        data-aos="fade-up"
      >
        <div className="text-center md:text-left" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-purple-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-md mx-auto md:mx-0">
            Namanyane prepares learners well to achieve in all areas of learning
            by providing a challenging and flexible program. Provide a broad
            education open to all learners.
          </p>
        </div>
        <img
          src={missionImage}
          alt="Mission"
          className="w-full max-w-sm rounded-lg shadow-lg object-cover"
          data-aos="zoom-in"
        />
      </div>
    </section>
  );
}

export default VisionMission;
