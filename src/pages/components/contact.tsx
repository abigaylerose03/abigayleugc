import React from "react";

export default function Contact() {
  return (
    <main className="flex flex-col items-center" id="contact">
      <h1 className="mt-8 text-ab-accent text-center uppercase text-4xl mb-8 font-unbounded">
        Let&apos;s Make <span className="font-bold">Magic</span> Together
      </h1>
    <p className="my-8 text-center text-2xl font-nunito"> 
  Fill out the contact form below or email me at <a href="mailto:abigayleugc@gmail.com">abigayleugc@gmail.com</a> and I will be in touch.
</p>


      <div className="flex flex-col items-center mt-0 w-full px-4">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeepJC_xuCVwnEzVbl8OkZDb1mR5t5fUZ-xfy1POs2HoOa9FA/viewform?embedded=true"
          className="w-full"
          style={{ height: "1355px" }}
          loading="lazy"
        >
          Loading…<p className="my-8 text-center text-2xl font-nunito"> 
  Fill out the contact form below or email me at <a href="mailto:abigayleugc@gmail.com">abigayleugc@gmail.com</a> and I will be in touch.
</p>

        </iframe>
      </div>
    </main>
  );
}
