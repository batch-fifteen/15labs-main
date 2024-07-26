import React from "react";
import ContactUsSvg from "../../assets/Contact-us.svg";

const ContactUs: React.FC = () => {
  return (
    <section className="container mx-auto min-h-screen px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen p-4 md:p-12">
        <div className="flex justify-center items-center">
          <img
            src={ContactUsSvg}
            alt="Contact Us"
            className="h-64 md:h-[641px]"
          />
        </div>
        <div className="w-full p-4 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">Contact Us</h1>
          <p className="w-full md:w-96 leading-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <form
            action="#"
            method="POST"
            className="w-full md:w-[36.438rem] mt-4"
          >
            <div className="my:4 md:my-6">
              {/* <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label> */}
              <input
                type="text"
                id="name"
                name="name"
                className="h-14 mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#335EF7] focus:border-[#335EF7] sm:text-base"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="my:4 md:my-6">
              {/* <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label> */}
              <input
                type="email"
                id="email"
                name="email"
                className="h-14 mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#335EF7] focus:border-[#335EF7] sm:text-base"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="my-4">
              {/* <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label> */}
              <textarea
                id="message"
                name="message"
                rows={8}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#335EF7] focus:border-[#335EF7] sm:text-base"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="pt-4 md:pt-8">
              <button
                type="submit"
                className="w-full h-12 flex justify-center items-center border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-[#335EF7] hover:bg-[#2744D3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#335EF7]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
