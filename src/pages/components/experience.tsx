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
  const items = ["1-3 Day Turnaround Time", "Item 2", "Item 3"];
  const maxWordsPerLine = 2;

  const videos = {
    beauty: [
 
      { src: "/videos/bricespray.MOV", title: "Rice Water Spray - ProBliva (Competitor Comparison)" }, // tutorial?
      { src: "/videos/bhairserum.MOV", title: "KBeauty Hair Serum - Mise en Scene (Tutorial)" }, // add step 1, step 2
      { src: "/videos/bpeachlily.MOV", title: "Glass Skin Care Kit - PeachLily (Aesthetic)" },
    ],
    home: [
      { src: "/videos/hcoffee.MOV", title: "KClassic Coffee Machine - Keurig (Competitor Comparison)" },
      { src: "/videos/hcart.MOV", title: "3 Tier Cart - Amazon (Lifestyle)" },
      // process - daily morning routine
      // visually satisfying - tacos
    ],
    tech: [
      { src: "/videos/abloom.MOV",  title: "Mobile App - Bloom (Skit)" },
      { src: "/videos/avercel.MOV", title: "Web App - Vercel (Competitor Comparison)" },
      { src: "/videos/apomo.MOV", title: "Website - Pomofocus.io (Demonstration)" },
      { src: "/videos/azhang.MOV", title: "Website - Money Bundle Kit by Lillian Zhang (Direct Testimonial)" },
      // green screen article - new
    ],
    wellness: [
      { src: "/videos/wsleepspray.MOV",  title: "Relexation Spray - Nature's Beauty (Tutorial)" },
      { src: "/videos/wmag.MOV", title: "Magnesium Dietary Supplement - NatureMade (Direct Testimonial)" },
      { src: "/videos/wmaggi.MOV", title: "Daily Morning Routine ft. Magnify Wellness (Process)" },
      // experience grwm for my wedding (columbia athletic club edition))
   
    ],
  };

  return (
    <main className="">
      <h1 className="mt-8 text-ab-accent text-center text-4xl uppercase font-unbounded">
        No bc, my <span style={{fontWeight: "bold"}}>past work</span> aims to be scroll stoppin 😜
      </h1>

      <h3 className="my-8 text-center text-2xl font-nunito">
        UGC Ad Examples
      </h3>

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
                  style={{ marginLeft: "200px", maxWidth: "240px", width: "100%", margin: "auto" }}
                >
                  <video
                    controls
                    style={{
                      width: "100%",
                      height: "auto",
                      
                      objectFit: "cover",
                      objectPosition: "center",
                      backgroundColor: "white",
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

      <div className="mt-12">
        <h3 className="text-2xl text-center py-4 font-unbounded tracking-wider bg-gray-500 text-white">
          PHOTOGRAPHY THAT HAS THE AESTHETICS TO BUILD BRAND LOYALISTS
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <img src="/images/photo.png" alt="Large Photo" />
          <div>
	          <h2 className="text-2xl text-center py-4 font-unbounded tracking-wider">Some stats of my growth 🚀</h2>
	          <h3 className="font-nunito"> Founder - Magnify Wellness (100+ chapter clubs, 80+ volunteers, 4k+ app downloads, 1M+ impressions)</h3>
	          <h3 className="font-nunito"> Content Creator and Newsletter Writer (500+ Subscribers, 12k+ followers across LinkedIn and Instagram)</h3>
	          <h3 className="font-nunito"> Mentor (Top Mentor of 2023 on Topmate, featured on New York Times Square)</h3>
	          <h3 className="font-nunito"> Speaker (invited to speak on 100+ podcast, hackathons, school events)</h3>
	          <h2 className="font-nunito"><span style={{fontWeight: "bold"}}>My story continues...</span></h2>
          </div>

      </div>
      </div>
    </main>
  );
}
