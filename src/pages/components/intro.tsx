import Image from "next/image";

export default function Intro() {
    return(
        // Using grid layout with 2 columns for larger screens and defaulting to 1 column (stacked) for smaller screens
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 content-center	">
            <div className="text-center">
                <h2 className="uppercase text-ab-accent font-bold">Meet Your Creative Partner</h2>
                <h1 className="uppercase text-white text-6xl mb-4">Abigayle Peterson</h1>
                <h3 className="uppercase text-ab-accent">UGC Portfolio ⚡</h3>
                <ul>
                    <li>💸 Top Creator @ Topmate 2023</li>
                    <li>💸 Founder @ Magnify Wellness Inc.</li>
                    <li>💸 Top Product Manager Voice on LinkedIn (11k+)</li>
                </ul>
                <p>Expert product storyteller who <span className="font-bold">transforms</span> viewers to loyal fans of your brand</p>
            </div>
            <div className="flex justify-center items-center content-center	">
                <Image src="/your-image-path.jpg" alt="Description of Image" width={500} height={300} objectFit="cover"/>
            </div>
        </main>
    );
}
