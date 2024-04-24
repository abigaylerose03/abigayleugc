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
          <h2 className="text-2xl font-bold underline font-unbounded">
           🔎 UGC Paid Ads and UGC Organic
          </h2>
          <div className="text-xl">
            <p className="my-4 font-nunito">
              I create ads that effectively lead to increased conversions and
              sales
            </p>
            <p className="mb-2 font-nunito">This Includes:</p>
            <ul className="font-nunito">
              <li>✅ Concept ideation process</li>
              <li>✅ Script writing</li>
              <li>✅ Direct-response marketing: video with hook, body, and CTA</li>
              <li>✅ Revisions (if any)</li>
              <li className="mb-4">➕ Add-ons (Paid ads): Paid ad usage rights raw footage, multiple hooks, rush fee (1-3 days), monthly retainers</li>
              <li className="mb-4">➕ Add-ons (Organic content): Monthly retainers, raw footage, UGC photos, product photography, rush fee (1-3 days), re-films, exclusitivity</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center text-center uppercase">
          <h2 className="text-2xl font-bold underline font-unbounded">
           🔎 UGC Photography
          </h2>
          <div className="text-xl">
            <p className="my-4 font-nunito">
              I create aesthetic photos with a brand&apos;s voice as top of mind
            </p>
            <p className="mb-2 font-nunito">This Includes:</p>
            <ul className="font-nunito">
              <li>✅ Ideation process</li>
              <li>✅ Raw images</li>
              <li>✅ Revisions and editing </li>
           
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
