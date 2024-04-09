import React from "react";

function splitText(text: string, maxWordsPerLine: number): string[] {
  const words = text.split(" ");
  const lines = [];
  for (let i = 0; i < words.length; i += maxWordsPerLine) {
    lines.push(words.slice(i, i + maxWordsPerLine).join(" "));
  }
  return lines;
}

export default function Experience() {
  // Edit/add for hexagon text
  const items = ["1-3 Day Turnaround Time", "Item 2", "Item 3"];
  const maxWordsPerLine = 2;

  // Add videos into public/videos/
  const videos = [
    { src: "/videos/test.mp4", title: "Video 1" },
    { src: "/videos/test2.mp4", title: "Video 2" },
    { src: "/videos/test3.mp4", title: "Video 3" },
    { src: "/videos/test4.mp4", title: "Video 4" },
  ];

  return (
    <main className="p-4">
      <h1 className="mt-8 text-ab-accent text-center text-5xl uppercase">
        Past Work
      </h1>

      {/* hexagon headers */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => {
          const lines = splitText(item, maxWordsPerLine);
          const startY = 50 - (lines.length - 1) * 10;
          return (
            <div key={index} className="flex justify-center">
              <svg
                fill="#A6988B"
                className="w-60 h-60 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
                version="1.1"
                viewBox="0 0 184.751 184.751"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z" />
                  {lines.map((line, lineIndex) => (
                    <text
                      key={lineIndex}
                      x="50%"
                      y={`${startY + lineIndex * 20}%`}
                      textAnchor="middle"
                      fill="black"
                      className="uppercase text-black font-bold"
                    >
                      {line}
                    </text>
                  ))}
                </g>
              </svg>
            </div>
          );
        })}
      </div>

      {/* Text */}
      <h3 className="my-8 text-center text-2xl">
        Content that creates <span className="italic">authentic</span>{" "}
        portrayals of your brand, increasing retention and engagment{" "}
        <span className="italic">speedily.</span>
      </h3>

      {/* Videos */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="flex justify-center items-center">
            <div
              className="video-container"
              style={{ maxWidth: "240px", width: "100%", margin: "auto" }}
            >
              <video
                controls
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  aspectRatio: "9 / 16",
                }}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-center mt-4 text-xl">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
