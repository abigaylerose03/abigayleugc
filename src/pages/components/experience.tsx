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
    ads: [
 
      { src: "/videos/ricewater.MOV", title: "Rice Water Spray - ProBliva (Problem / Solution)" }, // tutorial?
      { src: "/videos/hcoffee.MOV", title: "KClassic Coffee Machine - Keurig (Greenscreen)" },
      { src: "/videos/cart.MOV", title: "3 Tier Cart - Amazon (Problem / Solution)" }, // cart
      { src: "/videos/newmag.MOV",  title: "Magenesium Dietary Supplement - NatureMade (Testimonial)" },
      { src: "/videos/bloomthemoon.MOV",  title: "Mobile App - Bloom (Skit)" },
      { src: "/videos/apomo.MOV", title: "Website - Pomofocus.io (Competitor Comparison)" },
      { src: "/videos/sleeps.MOV",  title: "Relexation Spray - Nature's Beauty (Demonstration)" },
      { src: "/videos/bhairserum.MOV", title: "KBeauty Hair Serum - Mise en Scene (Testimonial)" }, // add step 1, step 2
      
    ],
    organic: [
     { src: "/videos/aestheticc.mov", title: "Air Fryer - Philips (Aesthetic)" },
      { src: "/videos/hasmr.MOV", title: "Dining Table - Amazon (ASMR)" },
      { src: "/videos/wmaggi.MOV", title: "Mobile App - Magnify Wellness (Relatable)" },
      { src: "/videos/avercel.MOV", title: "Web App - Vercel (GRWM)" },

      // process - daily morning routine
      // visually satisfying - tacos
    ],

  };

  return (
    <main className="">
      <h1 className="mt-8 text-ab-accent text-center text-4xl uppercase font-unbounded">
        No bc, my <span style={{fontWeight: "bold"}}>past work</span> aims to be scroll stoppin 😜
      </h1>

      <h3 className="my-8 text-center text-2xl font-nunito">
        UGC Paid Media and UGC Organic Examples
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
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
		  <img src="/images/photo.png" alt="Large Photo" className="w-full md:w-auto" />
		  <div className="flex flex-col justify-center">
		    <h2 className="text-2xl text-center py-4 font-unbounded tracking-wider">Some stats of my growth 🚀</h2>
		    <div className="px-6 py-8">
		      <details className="mb-4">
		        <summary className="text-lg font-semibold cursor-pointer">⚡ Founder - Magnify Wellness</summary>
		        <p className="font-nunito ml-4 mt-2">
		          100+ chapter clubs, 80+ volunteers, 4k+ app downloads, 1M+ impressions. <a className="text-blue hover:text-blue" href="https://magnifywellness.org"> Click me to check out our website</a>
		        </p>
		      </details>
		      <details className="mb-4">
		        <summary className="text-lg font-semibold cursor-pointer">⚡ Content Creator and Newsletter Writer</summary>
		        <p className="font-nunito ml-4 mt-2">
		          500+ Subscribers, 12k+ followers across LinkedIn and Instagram
		        </p>
		      </details>
		      <details className="mb-4">
		        <summary className="text-lg font-semibold cursor-pointer">⚡ Mentor</summary>
		        <p className="font-nunito ml-4 mt-2">
		          Top Mentor of 2023 on Topmate, featured on New York Times Square
		        </p>
		      </details>
		      <details className="mb-4">
		        <summary className="text-lg font-semibold cursor-pointer">⚡ Speaker</summary>
		        <p className="font-nunito ml-4 mt-2">
		          Invited to speak on 100+ podcasts, hackathons, school events.  
		          <a className="text-blue hover:text-blue" href="https://abigayle.notion.site/65e25e57e942402f97dd8c5d702ce299?v=651b994fde2746a3b57c25c532d3ee45&pvs=4"> Click me for list of all speaking engagements</a>

		        </p>

		      </details>
		    
		    </div>
		

      </div>
      </div>
      </div>

    </main>
  );
}
