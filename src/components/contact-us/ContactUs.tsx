import React, { useRef, FormEvent, useState } from "react";
import ContactUsSvg from "../../assets/Contact-us.svg";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import SuccessAlert from "./SuccessAlert";
import TooManyRequestAlert from "./TooManyRequestAlert";
import UnavailableAlert from "./UnavailableAlert";

// NOTE:
// Email send status codes: 200
// Too many requests status codes: 429
// Unavailable For Legal Reasons (block headless) status codes: 451

const ContactUs: React.FC = () => {
  const [statusCode, setStatusCode] = useState<number | undefined>(undefined);
  const [alert, setAlert] = useState<boolean>(true);
  const [errorSending, setErrorSending] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm("service_kzhp7sm", "template_vwm69rd", form.current ?? "", {
        publicKey: "1UTd0FttavSRWqE6B",
        blockHeadless: true,
        limitRate: {
          throttle: 120_000, // 120,000 milidetik = 2 menit (1 request per 2 menit)
        },
      })
      .then(
        (success: EmailJSResponseStatus) => {
          setAlert(true);
          setStatusCode(success.status);
          setErrorSending(false);
          if (form.current) form.current.reset();
          console.info(
            "Succcessfully sent email, with status code: ",
            success.status
          );
        },
        (err: EmailJSResponseStatus) => {
          setAlert(true);
          setStatusCode(err.status);
          setErrorSending(true);
          console.error(
            "Failed to send email, with status code: ",
            err.status,
            " error code, with status code: ",
            err.status
          );
        }
      );
  };

  const closeAlert = () => {
    setAlert(false);
    setStatusCode(undefined);
  };

  return (
    <section className="container mx-auto min-h-screen px-4">
      {statusCode === 200 && <SuccessAlert open={alert} onClose={closeAlert} />}
      {statusCode === 429 && (
        <TooManyRequestAlert open={alert} onClose={closeAlert} />
      )}
      {statusCode === 451 && (
        <UnavailableAlert open={alert} onClose={closeAlert} />
      )}
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
            // action="#"
            // method="POST"
            ref={form}
            onSubmit={sendEmail}
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
                name="user_name"
                className={`h-14 mt-1 block w-full px-3 py-2 bg-white border ${
                  errorSending ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-[#335EF7] ${
                  errorSending
                    ? "focus:border-red-500"
                    : "focus:border-[#335EF7]"
                } sm:text-base`}
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
                name="user_email"
                className={`h-14 mt-1 block w-full px-3 py-2 bg-white border ${
                  errorSending ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-[#335EF7] ${
                  errorSending
                    ? "focus:border-red-500"
                    : "focus:border-[#335EF7]"
                } sm:text-base`}
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
                name="user_message"
                rows={8}
                className={`mt-1 block w-full px-3 py-2 bg-white border ${
                  errorSending ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-[#335EF7] ${
                  errorSending
                    ? "focus:border-red-500"
                    : "focus:border-[#335EF7]"
                } sm:text-base`}
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
