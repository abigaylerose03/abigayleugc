import { Inter } from "next/font/google";
import Intro from "./components/intro";
import Contact from "./components/contact";
import Experience from "./components/experience";

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
