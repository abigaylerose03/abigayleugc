import Image from "next/image";

export default function Services() {
  return (
    <main className="mt-8">
      <h1 className="text-ab-accent text-center uppercase text-5xl mb-8">
        My Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-lg overflow-hidden">
            <Image src="/ab-2.webp" alt="Service" width={300} height={300} />
          </div>
        </div>

        <div className="flex flex-col items-center text-center uppercase">
          <h2 className="text-2xl font-bold underline">UGC Ads</h2>
          <div className="text-xl">
            <p className="mb-4">
              I create ads that effectively lead to increased conversions and
              sales.
            </p>
            <p className="mb-2">This Includes:</p>
            <ul>
              <li>Ideation Process</li>
              <li>Script Writing</li>
              <li>Video with Hook, Body, & CTA</li>
              <li>Editing</li>
              <li>Usage Routes</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center text-center uppercase">
          <h2 className="text-2xl font-bold underline">UGC Photography</h2>
          <div className="text-xl">
            <p className="mb-4">
              I create aesthetic photos that don't compromise on ROI
            </p>
            <p className="mb-2">This Includes:</p>
            <ul>
              <li>Ideation Process</li>
              <li>Raw Images</li>
              <li>Editing</li>
              <li>Usage Rights</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
