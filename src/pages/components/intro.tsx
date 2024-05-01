import Image from "next/image";
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Intro() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12 object-fit:cover content-center">
      <div className="text-center">
        <h2 className="uppercase text-ab-accent font-bold text-2xl mb-6 md:text-2xl font-unbounded tracking-wide">
          Meet Your Creative Partner
        </h2>
        <h1 className="uppercase text-white text-5xl mb-6 md:text-6xl font-tenor tracking-wide">
          Abigayle Peterson
        </h1>
        <h3 className="uppercase text-ab-accent text-2xl mb-6 md:text-2xl font-unbounded">
          UGC Portfolio ⚡
        </h3>
        <ul className="text-xl pb-6 md:text-2xl font-nunito">
          <li>
          💸 <a href="https://drive.google.com/file/d/1ze2b9n0-keWaC7e6A0qmTHrasOaH4GNb/view?usp=sharing" className="underline">Top Creator @ Topmate 2023</a>
           </li>
           <li>
           	💸 <a href="https://shoutoutdfw.com/meet-abigayle-peterson-founder-ceo-at-magnify-wellness/" className="underline">Founder @ Magnify Wellness Inc.</a>
          	</li>

          <li>💸 Top Product Manager Voice on LinkedIn (11k+)</li>
        </ul>
        <p className="mb-10 text-xl md:text-2xl font-nunito">
          Expert product storyteller who{" "}
          <span className="font-bold">transforms</span> viewers to loyal fans of
          your brand
        </p>
        <a
          href="#contact"
          className="bg-black text-white rounded-md px-8 py-4 hover:bg-gray-800 transition-colors font-nunito text-xl md:text-2xl"
        >
          Work With Me
        </a>
        <div className="flex justify-center items-center mt-10">
          <a href="https://www.instagram.com/abbytes_03/" className="text-brown-500 mr-4">
            <FaInstagram size={50} />
          </a>
          <a href="https://www.linkedin.com/in/abigaylepeterson/" className="text-brown-500 mr-4">
            <FaLinkedin size={50} />
          </a>
          <a href="mailto:abigayleugc@gmail.com" className="text-brown-500 mr-4">
            <FaEnvelope size={50} />
          </a>
        </div>
      </div>

       <div className="flex justify-center items-center content-center">
        <div className="relative w-full max-w-full h-80 md:w-96 md:h-96">
          <Image
            src="/ab_1.jpg"
            alt="Abigayle Peterson"
            layout="fill"
            objectFit="cover"
            className="sm:object-contain"
          />
        </div>
      </div>

    </main>
  );
}
