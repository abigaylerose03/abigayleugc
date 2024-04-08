import { Inter } from "next/font/google";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Services from "./components/services";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className="bg-ab-page">
      <Navbar/>
      <Intro/>
      <Experience/>
      <Services/>
      <Contact/>
    </main>
  );
}
