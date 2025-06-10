import React from "react";

const GoogleMap = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl text-center text-purple-800 font-semibold mb-6">
        Find Us
      </h2>
      <div className="flex justify-center">
        <iframe
          title="Namanyane Primary School Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.2047824571423!2d26.81940057514772!3d-29.206576892930002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8e6a15555749c3%3A0x657e28f6467906a1!2sNamanyane%20Primary%20School!5e1!3m2!1sen!2sza!4v1748208504995!5m2!1sen!2sza"
          width="100%"
          height="400"
          className="rounded-md shadow-lg max-w-4xl w-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleMap;
