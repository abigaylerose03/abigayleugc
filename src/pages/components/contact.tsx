import React, { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  updates: boolean;
  services: {
    UGCCreation: boolean;
    CreativeStrategy: boolean;
    Other: boolean;
  };
  budget: string;
  deliverables: string;
  needs: string;
};

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    updates: false,
    services: {
      UGCCreation: false,
      CreativeStrategy: false,
      Other: false,
    },
    budget: "",
    deliverables: "",
    needs: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      if (Object.keys(formState.services).includes(name)) {
        setFormState((prevState) => ({
          ...prevState,
          services: {
            ...prevState.services,
            [name]: checked,
          },
        }));
      } else {
        // Handle checkbox values
        setFormState((prevState) => ({ ...prevState, [name]: checked }));
      }
    } else {
      // Handle input values
      setFormState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted", JSON.stringify(formState, null, 2));
    setIsSubmitted(true);
  };

  return (
    <main className="flex flex-col items-center" id="contact">
      <h1 className="mt-8 text-ab-accent text-center uppercase text-4xl mb-8 font-unbounded">
        Let's Make <span className="font-bold">Magic</span> Together
      </h1>
      <div className="w-full md:w-5/6 lg:w-3/4 mx-auto bg-white shadow-md rounded-md p-8 min-h-[500px]">
        {" "}
        {/* Adjust the min-h-[value] as needed */}
        {isSubmitted ? (
          // Display the success message only in place of the form
          <div className="text-center flex justify-center items-center">
            <p className="text-xl">
              Thank you for your submission! We will be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <fieldset>
              <div className="flex items-center">
                <input
                  id="updatesYes"
                  name="updates"
                  type="checkbox"
                  onChange={handleChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label
                  htmlFor="updatesYes"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Sign up for news and updates
                </label>
              </div>
            </fieldset>

            <fieldset className="space-y-5">
              <legend className="text-sm font-medium text-gray-700">
                What services are you interested in?
              </legend>
              <div className="flex items-center">
                <input
                  id="serviceUGC"
                  name="UGCCreation"
                  type="checkbox"
                  onChange={handleChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label
                  htmlFor="serviceUGC"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  UGC creation
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="serviceStrategy"
                  name="CreativeStrategy"
                  type="checkbox"
                  onChange={handleChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label
                  htmlFor="serviceStrategy"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Creative strategy and consulting
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="serviceOther"
                  name="Other"
                  type="checkbox"
                  onChange={handleChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label
                  htmlFor="serviceOther"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Other
                </label>
              </div>
            </fieldset>
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700"
              >
                What is your budget?
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="deliverables"
                className="block text-sm font-medium text-gray-700"
              >
                How many deliverables are you looking for? *
              </label>
              <input
                type="text"
                id="deliverables"
                name="deliverables"
                required
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="needs"
                className="block text-sm font-medium text-gray-700"
              >
                Tell me more about your needs
              </label>
              <textarea
                id="needs"
                name="needs"
                rows={4}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
