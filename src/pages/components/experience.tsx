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

  // add and change videos and content here
  const videos = {
    beauty: [
      { src: "/videos/test.mp4", title: "Video 1" },
      { src: "/videos/test2.mp4", title: "Video 2" },
      { src: "/videos/test3.mp4", title: "Video 3" },
      { src: "/videos/test4.mp4", title: "Video 4" },
    ],
    home: [
      { src: "/videos/test.mp4", title: "Video 1" },
      { src: "/videos/test2.mp4", title: "Video 2" },
      { src: "/videos/test3.mp4", title: "Video 3" },
      { src: "/videos/test4.mp4", title: "Video 4" },
    ],
    tech: [
      { src: "/videos/test.mp4", title: "Video 1" },
      { src: "/videos/test2.mp4", title: "Video 2" },
      { src: "/videos/test3.mp4", title: "Video 3" },
      { src: "/videos/test4.mp4", title: "Video 4" },
    ],
    wellness: [
      { src: "/videos/test.mp4", title: "Video 1" },
      { src: "/videos/test2.mp4", title: "Video 2" },
      { src: "/videos/test3.mp4", title: "Video 3" },
      { src: "/videos/test4.mp4", title: "Video 4" },
    ],
  };

  return (
    <main className="">
      <h1 className="mt-8 text-ab-accent text-center text-4xl uppercase font-unbounded">
        Past Work
      </h1>

      {/* Hexagon headers -- temporarily removed for now */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => {
          const lines = splitText(item, maxWordsPerLine);
          const startY = 50 - (lines.length - 1) * 10;
          return (
            <div key={index} className="flex justify-center">
            </div>
          );
        })}
      </div>

      {/* Text */}
      <h3 className="my-8 text-center text-2xl font-nunito">
        Content that creates <span className="italic">authentic</span>{" "}
        portrayals of your brand, increasing retention and engagement{" "}
        <span className="italic">quickly.</span>
      </h3>

      {/* Videos and Category Titles */}
      {Object.entries(videos).map(([category, items], categoryIndex) => (
        <div
          key={categoryIndex}
          style={{
            backgroundColor: categoryIndex % 2 === 0 ? "#d3c2a6" : "#8C7961",
          }}
        >
          <h3
            className="text-2xl text-center py-4 font-unbounded tracking-wider"
            style={{ color: categoryIndex % 2 === 0 ? "#000000" : "#ffffff" }}
          >
            {category.toUpperCase()}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex justify-center items-center"
              >
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
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p
                    className="text-center mt-4 text-xl pb-4 font-nunito"
                    style={{
                      color: categoryIndex % 2 === 0 ? "#000000" : "#ffffff",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Photography Section */}
      <div className="mt-12">
        <h3 className="text-2xl text-center py-4 font-unbounded tracking-wider bg-gray-500 text-white">
          PHOTOGRAPHY THAT ATTRACTS, CONVERTS, AND BUILDS COMMUNITY
        </h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <img src="/images/photo1.jpg" alt="Photo 1" />
            </div>
            <div>
              <img src="/images/photo2.jpg" alt="Photo 2" />
            </div>
            <div>
              <img src="/images/photo3.jpg" alt="Photo 3" />
            </div>
            <div>
              <img src="/images/photo4.jpg" alt="Photo 4" />
            </div>
          </div>
          <div>
            <img src="/images/large_photo.jpg" alt="Large Photo" />
          
          </div>
        </div>
      </div>
    </main>
  );
}
