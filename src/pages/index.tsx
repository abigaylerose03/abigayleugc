import { Inter } from "next/font/google";
import Intro from "./components/intro";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-ab-page">
      <Navbar/>
      <Intro/>
    </main>
  );
}
