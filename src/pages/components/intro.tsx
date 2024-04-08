import Image from "next/image";


export default function Intro() {
    return(
        // Increasing grid gap and padding for larger spacing
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 content-center">
            <div className="text-center">
                <h2 className="uppercase text-ab-accent font-bold text-3xl mb-4">Meet Your Creative Partner</h2>
                <h1 className="uppercase text-white text-6xl mb-4">Abigayle Peterson</h1>
                <h3 className="uppercase text-ab-accent text-2xl mb-4">UGC Portfolio ⚡</h3>
                <ul className="text-xl pb-4">
                    <li>💸 Top Creator @ Topmate 2023</li>
                    <li>💸 Founder @ Magnify Wellness Inc.</li>
                    <li>💸 Top Product Manager Voice on LinkedIn (11k+)</li>
                </ul>
                <p className="mb-8 text-xl" >Expert product storyteller who <span className="font-bold">transforms</span> viewers to loyal fans of your brand</p>
                <a href="#" className="bg-black text-white rounded-md px-6 py-3 hover:bg-gray-800 transition-colors text-lg">Work With Me</a>
            </div>
            <div className="flex justify-center items-center content-center">
                <Image src="/ab_1.jpg" alt="Abigayle Peterson" width={350} height={600} objectFit="contain"/>
            </div>
        </main>
    );
}
