"use client";
import React, { useState } from "react";
import GithubIcon from "/public/github-mark.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setEmailSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md pr-3">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-6">
          <Link href="https://github.com/lo-andrew" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/andrew-lo-223913139/"
            target="_blank"
          >
            <Image src={LinkedinIcon} width="96" alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default EmailSection;
