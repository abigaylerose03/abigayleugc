import Image from "next/image";

export default function Services() {
  return (
    <main className="pt-8 bg-ab-page">
      <h1 className="text-ab-accent text-center uppercase text-4xl mb-8 font-unbounded">
        My Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-lg overflow-hidden">
            <Image src="/ab-2.webp" alt="Service" width={300} height={300} />
          </div>
        </div>

        <div className="flex flex-col items-center text-center uppercase">
          <h2 className="text-2xl font-bold underline font-unbounded">UGC Ads</h2>
          <div className="text-xl">
            <p className="my-4 font-nunito">
              I create ads that effectively lead to increased conversions and
              sales.
            </p>
            <p className="mb-2 font-nunito">This Includes:</p>
            <ul className="font-nunito">
              <li>Ideation Process</li>
              <li>Script Writing</li>
              <li>Video with Hook, Body, & CTA</li>
              <li>Editing</li>
              <li className="mb-4">Usage Routes</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center text-center uppercase">
          <h2 className="text-2xl font-bold underline font-unbounded">UGC Photography</h2>
          <div className="text-xl">
            <p className="my-4 font-nunito">
              I create aesthetic photos that don't compromise on ROI
            </p>
            <p className="mb-2 font-nunito">This Includes:</p>
            <ul className="font-nunito">
              <li>Ideation Process</li>
              <li>Raw Images</li>
              <li>Editing</li>
              <li className="mb-4">Usage Rights</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
