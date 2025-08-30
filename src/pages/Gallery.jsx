import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your local images
import sittingOutside from "../assets/sitting-outside.jpg";
import worldBook1 from "../assets/world-book-day-1.jpg";
import worldBook2 from "../assets/world-book-day-2.jpg";
import worldBook3 from "../assets/world-book-day-3.jpg";
import worldBook4 from "../assets/world-book-day-4.jpg";
import methodist1 from "../assets/methodist-church-day-1.jpg";
import methodist2 from "../assets/methodist-church-day-2.jpg";
import methodist3 from "../assets/methodist-church-day-3.jpg";
import methodist4 from "../assets/methodist-church-day-4.jpg";
import staffroomTalk from "../assets/staffroomTalk.jpg";
import soccerCones from "../assets/soccer-cones.jpg";
import skippingRope from "../assets/skipping-rope.jpg";
import soccer1 from "../assets/soccer-1.jpg";
import soccer2 from "../assets/soccer-2.jpg";
import soccer3 from "../assets/soccer-3.jpg";
import soccer4 from "../assets/soccer-4.jpg"; 
import soccer5 from "../assets/soccer-5.jpg";
import soccer6  from "../assets/soccer-6.jpg";
import soccer7 from "../assets/soccer-7.jpg";
import children from "../assets/children.jpg";
import checkers from "../assets/checkers.jpg";
import shoeDrive1 from "../assets/shoeDrive1.jpg";
import shoeDrive2 from "../assets/shoeDrive2.jpg";
import shoeDrive3 from "../assets/shoeDrive3.jpg";

// Add images to the array
const galleryItems = [sittingOutside, worldBook1, worldBook2, worldBook3, worldBook4, methodist1, methodist2, methodist3, methodist4, staffroomTalk, soccerCones, skippingRope, soccer1, soccer2, soccer3, soccer4, soccer5, soccer6, soccer7, children, checkers, shoeDrive1, shoeDrive2, shoeDrive3];

function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1
        className="text-3xl font-bold mb-8 text-center text-purple-800"
        data-aos="fade-down"
      >
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((image, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <img
              src={image}
              alt={`Gallery Image ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
