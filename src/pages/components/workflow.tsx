export default function Workflow() {
  return (
    <main className="bg-ab-accent flex flex-col items-center">
      <h1 className="text-ab-page mt-8 text-center uppercase text-4xl font-unbounded mb-8">
        My Workflow
      </h1>
      <h2 className="text-center uppercase text-2xl mb-8 font-nunito">
        Seamless Collaboration Abigayle x Brand
      </h2>
      {/* 2 column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16">
        <div className="flex flex-col items-center text-center uppercase">
          <h2 className="text-2xl font-bold underline">UGC ads</h2>
          <ul className="list-decimal text-xl font-nunito">
            <li>Email to discuss logistics, concepts, and ideas</li>
            <li>Receive 1st draft of video</li>
            <li>Discuss revision requests (if any)</li>
            <li>Final video delivered via dropbox</li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center uppercase">
          <h2 className="text-2xl font-bold underline">UGC Photography</h2>
          <ul className="list-decimal text-xl font-nunito">
            <li>Email to discuss logistics, concepts, and ideas</li>
            <li>Choose from raw images</li>
            <li>Receive updated, finalized raw images (if any)</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-8 text-xl uppercase">
        <h1 className="text-2xl font-bold underline">
          Investment Requirements
        </h1>
        <ul className="list-decimal font-nunito">
          <li>50% of Payment Due Upon Signing Contract</li>
          <li>Final 50% due after approval of final footage</li>
        </ul>
      </div>
      <h1 className="text-center uppercase my-4 text-xl font-nunito">
        email me:{" "}
        <a
          className="underline lowercase"
          href="mailto:abigayleugc@gmail.com<s"
        >
          abigayleugc@gmail.com
        </a>
      </h1>
    </main>
  );
}
