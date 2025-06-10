import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const missionPoints = [
  "Empower communities",
  "Deliver innovative solutions",
  "Promote sustainability",
  "Foster inclusive growth",
  "Champion education",
  "Drive social impact",
  "Inspire future leaders",
];

const corporateValues = [
  "Integrity",
  "Excellence",
  "Innovation",
  "Collaboration",
  "Respect",
  "Diversity",
  "Accountability",
  "Transparency",
  "Sustainability",
  "Empathy",
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="about-container">
      {/* School Overview */}
      <section
        className="mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 data-aos="zoom-in" data-aos-delay="200">
          Welcome to Namanyane Primary School
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="300"
          className="max-w-3xl mx-auto mb-6"
        >
          At Namanyane Primary School, we are dedicated to building a strong
          academic foundation while instilling lifelong values in every learner.
        </p>

        <p
          data-aos="fade-left"
          data-aos-delay="400"
          className="max-w-3xl mx-auto mb-8"
        >
          Founded in the heart of Thaba Nchu, Namanyane Primary School has
          proudly served its community since 1985. Over the decades, the school
          has grown from a small neighborhood institution into a vibrant center
          of learning and development. Committed to nurturing both academic
          excellence and cultural heritage, Namanyane continues to empower young
          minds with the knowledge and values necessary to thrive in a changing
          world.
        </p>

        <div
          className="flex justify-center mb-12"
          data-aos="zoom-in-up"
          data-aos-delay="500"
        >
          <img
            src="/src/assets/about-us-banner.jpg"
            alt="Namanyane Primary School"
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg object-cover"
            style={{ aspectRatio: "16 / 9" }}
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        className="mb-14 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3
          className="text-2xl font-semibold text-purple-700 mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Vision
        </h3>
        <p
          className="text-gray-700 mb-8 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Our vision aims to prepare and produce learners who are responsible
          citizens in their communities.
        </p>

        <h3
          className="text-2xl font-semibold text-purple-700 mb-6"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Mission
        </h3>
        <p
          className="text-gray-700 mb-4 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Namanyane prepares learners well to achieve in all areas of learning
          by:
        </p>

        <div className="mission-grid custom-mission-grid max-w-5xl mx-auto">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className="mission-tile"
              data-aos="flip-left"
              data-aos-delay={index * 150}
              data-aos-duration="800"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Values */}
      <section
        className="mb-12 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3
          className="text-2xl font-semibold text-purple-700 mb-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Corporate Values
        </h3>
        <div className="corporate-values-grid custom-values-grid max-w-5xl mx-auto">
          {corporateValues.map((value, index) => (
            <div
              key={index}
              className="corporate-tile"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
            >
              {value}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <div
        className="text-center mt-10 text-sm text-gray-600"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p>📞 Tel: 051 873 2988</p>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:namanyane@gmail.com"
            className="underline text-purple-700"
          >
            namanyane@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
