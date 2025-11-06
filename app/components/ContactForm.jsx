import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_r70p5vb",
        "template_qqqke9f",
        form.current,
        "-6AuREuXuC-qTJZe1"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("Email sent successfully!");
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus(`Failed to send email: ${error.text}`);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* Add Name Field */}
      <label
        htmlFor="name"
        className="text-white block mb-2 text-sm font-medium"
      >
        Your name
      </label>
      <input
        type="text"
        name="name"
        required
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-3"
        placeholder="John Doe"
      />

      {/* Email - change name from user_email to email */}
      <label
        htmlFor="email"
        className="text-white block mb-2 text-sm font-medium"
      >
        Your email
      </label>
      <input
        type="email"
        name="email"
        placeholder="example@email.com"
        required
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      />

      <label
        htmlFor="subject"
        className="text-white block text-sm mb-2 font-medium mt-3"
      >
        Subject
      </label>
      <input
        type="text"
        name="subject"
        placeholder="Hello!"
        required
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      />

      <label
        htmlFor="message"
        className="text-white block text-sm mb-2 font-medium mt-3"
      >
        Message
      </label>
      <textarea
        name="message"
        placeholder="Write your message here"
        required
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        rows="5"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary-500 hover:bg-primary-600 text-black font-medium py-2.5 px-5 rounded-lg w-full border-2 bg-white mt-3 hover:text-grey hover:border-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>

      {status && (
        <p
          className={`mt-2 ${
            status.includes("success") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
