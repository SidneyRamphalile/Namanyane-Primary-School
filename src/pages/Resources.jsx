import React from "react";

// List of downloadable PDFs
const resourcesList = [
  {
    id: 1,
    name: "Admission Form",
    file: "/documents/admission-form.pdf",
  },
  {
    id: 2,
    name: "School Activities Schedule",
    file: "/documents/activities-schedule.pdf",
  },
  {
    id: 3,
    name: "School Calendar",
    file: "/documents/school-calendar.pdf",
  },
];

// List of YouTube videos
const videoResources = [
  {
    id: 1,
    title: "3 tips on how to study effectively",
    url: "https://www.youtube.com/watch?v=TjPFZaMe2yw",
    thumbnail: "https://img.youtube.com/vi/TjPFZaMe2yw/hqdefault.jpg",
  },
  {
    id: 2,
    title: "Scientifically Proven Best Ways to Study",
    url: "https://www.youtube.com/watch?v=VJbKXmujI00",
    thumbnail: "https://img.youtube.com/vi/VJbKXmujI00/hqdefault.jpg",
  },
  {
    id: 3,
    title: "Fun Science Experiment for Kids",
    url: "https://www.youtube.com/watch?v=s7XgfF6SVwY",
    thumbnail: "https://img.youtube.com/vi/s7XgfF6SVwY/hqdefault.jpg",
  },
  {
    id: 4,
    title: "Vinegar + Baking Soda + Balloons = FIZZY FUN!",
    url: "https://www.youtube.com/watch?v=_CYgsqji_0k",
    thumbnail: "https://img.youtube.com/vi/_CYgsqji_0k/hqdefault.jpg",
  },
  {
    id: 5,
    title: "Cool Volcano Science Experiment with Vinegar and Baking Soda",
    url: "https://www.youtube.com/watch?v=dIvXnqQaSwM",
    thumbnail: "https://img.youtube.com/vi/dIvXnqQaSwM/hqdefault.jpg",
  },
  {
    id: 6,
    title: "Beginner Math Tips",
    url: "https://www.youtube.com/watch?v=fYd_fqTpBfk",
    thumbnail: "https://img.youtube.com/vi/fYd_fqTpBfk/hqdefault.jpg",
  },
  {
    id: 7,
    title: "How To Play Chess: The Ultimate Beginner Guide",
    url: "https://www.youtube.com/watch?v=OCSbzArwB10",
    thumbnail: "https://img.youtube.com/vi/OCSbzArwB10/hqdefault.jpg",
  },
  {
    id: 8,
    title: "South African History",
    url: "https://www.youtube.com/watch?v=cVN6LkGQ-Sc",
    thumbnail: "https://img.youtube.com/vi/cVN6LkGQ-Sc/hqdefault.jpg",
  },
  {
    id: 9,
    title: "Astronomy for Kids - Solar System",
    url: "https://www.youtube.com/watch?v=mLZ11y8qzwY",
    thumbnail: "https://img.youtube.com/vi/mLZ11y8qzwY/hqdefault.jpg",
  },
];

function Resources() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
        Resources
      </h1>

      {/* Document Downloads */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Downloadable Documents
        </h2>
        <ul className="space-y-4">
          {resourcesList.map(({ id, name, file }) => (
            <li key={id}>
              <a
                href={file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-yellow-400 font-semibold underline"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* YouTube Educational Videos */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Educational Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videoResources.map(({ id, title, url, thumbnail }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-700">
                  {title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
