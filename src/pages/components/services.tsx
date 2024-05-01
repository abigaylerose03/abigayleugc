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

        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold underline font-unbounded">
            🔎 UGC Paid Ads and UGC Organic
          </h2>
          <div className="text-lg font-nunito">
            <p className="my-2">
              I create ads that convert with an eye for aesthetics.
            </p>
            <div className="my-2">
              <details>
                <summary className="font-bold mb-2">This Includes</summary>
                <ul className="pl-4">
                  <li>Concept ideation process</li>
                  <hr className="my-1 border-gray-300" />
                  <li>Script writing</li>
                  <hr className="my-1 border-gray-300" />
                  <li>Direct-response marketing: video with hook, body, and CTA</li>
                  <hr className="my-1 border-gray-300" />
                  <li>Revisions (if any)</li>
                  <hr className="my-1 border-gray-300" />
                  <li>Add-ons (Paid ads): Paid ad usage rights raw footage, multiple hooks, rush fee (1-3 days), monthly retainers</li>
                  <hr className="my-1 border-gray-300" />
                  <li>Add-ons (Organic content): Monthly retainers, raw footage, UGC photos, product photography, rush fee (1-3 days), re-films, exclusitivity</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold underline font-unbounded">
            🔎 UGC Photography
          </h2>
          <div className="my-2">
              <details>
                <summary className="font-bold mb-2">This Includes</summary>
                <ul className="pl-4">
                  <li>Ideation process</li>
                  <hr className="my-1 border-gray-300" />
                  <li>Raw images</li>
                  <hr className="my-1 border-gray-300" />
                  <li>Revisions and editing</li>
                </ul>
              </details>
            </div>
        </div>
      </div>
    </main>
  );
}
