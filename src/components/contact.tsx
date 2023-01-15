import { useRef, useState } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
import Popup from "./popup";
import "../css/subIndex.css";
import { FiSend } from "react-icons/fi";

const contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null as any);
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_5cxatze",
        "template_sihwcap",
        form.current,
        "1AFwh0OVvrer66bO0"
      )
      .then(
        (result: { text: any }) => {
          setLoading(true);
        },
        (error: { text: any }) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
        Contact Me{" "}
        <FiSend
          width={30}
          height={30}
          className="inline-block ml-2 text-white"
        />
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
        I'm currently looking for new opportunities. If you have any questions,
        or if you just want to say hi, feel free to send me a message.
      </p>

      <form ref={form} onSubmit={sendEmail} className="space-y-8">
        <div>
          <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            placeholder="your name..."
            className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
            type="text"
            name="name"
          />
        </div>

        <div>
          <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            placeholder="you@example.com"
            className="peer block p-3 w-full text-sm rounded-lg border shadow-sm bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
            type="email"
            name="email"
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            placeholder="write a message..."
            className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
            rows={6}
            name="message"
          />
        </div>

        <div className="flex justify-center">
          <div className="button">
            <button type="submit" value="Send" className="px-10 py-4">
              Send{" "}
              <FiSend
                width={30}
                height={30}
                className="inline-block ml-1 text-white"
              />
            </button>
          </div>
        </div>
        <Popup trigger={loading} setTrigger={setLoading}>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-center text-white">
              Message Sent!
            </h2>
            <p className="text-center text-gray-400">
              I'll get back to you as soon as possible.
            </p>
          </div>
        </Popup>
      </form>
    </div>
  );
};

export default contact;
