export default function Workflow() {
  return (
    <main className="bg-ab-accent flex flex-col items-center py-16">
      <h1 className="text-ab-page text-4xl font-bold uppercase mb-8">
        My Workflow
      </h1>
      <h2 className="text-center text-2xl font-bold uppercase mb-8">
        Seamless Collaboration: Abigayle x Brand
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">🔎 UGC ads</h2>
          <ul className="list-disc text-lg font-nunito">
            <li>Email me to discuss logistics, concepts, and ideas</li>
            <li>Receive 1st draft of video</li>
            <li>Discuss revision requests (if any)</li>
            <li>Final video delivered via Dropbox</li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">🔎 UGC Photography</h2>
          <ul className="list-disc text-lg font-nunito">
            <li>Email to discuss logistics, concepts, and ideas</li>
            <li>Choose from raw images</li>
            <li>Receive updated, finalized images (if any)</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">🔎 Investment Requirements</h2>
        <ul className="list-disc text-lg font-nunito">
          <li>50% of payment due after signing contract</li>
          <li>Final 50% due after the approval of final footage</li>
        </ul>
      </div>
      <h1 className="text-center mt-12 text-xl font-bold">
        Let&rsquo;s level up your brand today. Email me at{" "}
        <a className="text-blue-500 underline" href="mailto:abigayleugc@gmail.com">
          abigayleugc@gmail.com
        </a>
      </h1>
    </main>
  );
}
