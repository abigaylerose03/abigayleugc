import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const AboutCard = () => {
  return (
    // <div className="max-w-md mx-auto bg-ab-alt-bg rounded-lg shadow-md overflow-hidden md:amx-w-4xl flex justify-between p-4">
    <div className="max-w-xl mx-auto bg-ab-alt-bg rounded-lg shadow-md overflow-visible md:max-w-4xl flex flex-col p-6 relative">
      <div className="absolute -right-16 top-0 z-0">
        <Image
          src="/abbychina.jpeg"
          alt="Oval Image"
          className="object-cover w-32 h-48 rounded-full"
          width={400}
          height={600}
        />
      </div>
      <div className="absolute -right-10 top-40 z-10">
        <Image
          src="/abbyseekout.jpeg"
          alt="Rectangle Image"
          className="object-cover w-40 h-56 rounded-md shadow-lg"
          width={500}
          height={800}
        />
      </div>
      <div>
        <div className="pr-28">
          <div className="text-5xl uppercase font-tenor">Who is Abigayle?</div>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-gray-700 w-10 h-10"
            />
            <span className="ml-2 text-xl text-gray-600 tracking-wide uppercase font-unbounded">
              Greater Seattle Area, WA
            </span>
          </div>
          <p className="mt-2 leading-relaxed font-nunito">
            Abigayle works as a Product Manager for startups with a track record
            for building successful products with delightful user experiences.
            Previously, she founded Magnify Wellness, an award-winning nonprofit
            that uses a community-powered approach to connect youth to mental
            health support. She started Magnify Wellness as an iOS app and then
            expanded the passion project into a full-fledged international
            organization.
          </p>
          <p className="mt-2 leading-relaxed font-nunito">
            Abigayle led the 80+ team of volunteers to build out Magnify
            Wellness&apos;s portfolio of initiatives, winning the title of &apos;Top
            Global Health Innovations&apos; from the Bay Area Global Health
            competition as a college freshman with contenders from Stanford
            Medicine and more. Abigayle loves to mentor others, and has
            consulted hundreds of students and professionals on their passion
            projects and career, leading her to build a highly engaged 11k+
            followers across LinkedIn and Instagram, and her Substack
            newsletter. Abigayle’s work experience positions her as a{" "}
            <span className="font-bold">unique</span> and{" "}
            <span className="font-bold">invaluable</span> creative partner in
            cultivating an engaged community for your next ad campaign.
          </p>
        </div>
      </div>
        {/* Text "Sound like a good fit?" */}
        <div className="flex justify-center items-center mt-6">
          <p className="text-xl md:text-2xl font-nunito mr-4">
            Sound like a good fit?
          </p>
          {/* "Work With Me" button */}
          <a
            href="#contact"
            className="bg-black text-white rounded-md px-8 py-4 hover:bg-gray-800 transition-colors font-nunito text-xl md:text-2xl"
          >
            Let's make magic together
          </a>
        </div>
    </div>
  );
};

export default AboutCard;
