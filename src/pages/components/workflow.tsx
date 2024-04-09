export default function Workflow() {
    return(
        <main className="bg-ab-accent mt-8 flex flex-col items-center">
            <h1 className="text-ab-page mt-8 text-center uppercase text-5xl mb-8">My Workflow</h1>
            <h2 className="text-center uppercase text-2xl mb-8">Seamless Collaboration Abigayle x Brand</h2>
            {/* 2 column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16">
                <div className="flex flex-col items-center text-center uppercase">
                    <h2 className="text-2xl font-bold underline">UGC ads</h2>
                    <ul className="list-decimal">
                        <li>Email to discuss logistics, concepts, and ideas</li>
                        <li>Receive 1st draft of video</li>
                        <li>Discuss revision requests (if any)</li>
                        <li>Final video delivered via dropbox</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center text-center uppercase">
                    <h2 className="text-2xl font-bold underline">UGC Photography</h2>
                    <ul className="list-decimal">
                        <li>Email to discuss logistics, concepts, and ideas</li>
                        <li>Receive from raw images</li>
                        <li>Receive final raw images</li>
                    </ul>
                </div>
            </div>
            {/* centered text */}
            <h1 className="text-center uppercase mt-4">email me: <a href="mailto:abigayleugc@gmail.com<s">abigayleugc@gmail.com</a></h1>
        </main>
    )
}
