import { Inter } from "next/font/google";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Services from "./components/services";
import Workflow from "./components/workflow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-ab-page">
      <Intro />
      <Experience />
      <Contact />
    </main>
  );
}
