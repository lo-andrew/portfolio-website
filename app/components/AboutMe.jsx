"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillImage from "./SkillImage";

export default function AboutMe() {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer passionate about crafting
            interactive and responsive web applications that deliver real value.
            My journey in web development is fueled by an insatiable curiosity
            of the web. I genuinely love diving into how things work and finding
            better ways to build them. With hands-on experience in JavaScript,
            React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS,
            and Git, I'm constantly exploring best practices and technologies to
            enhance my skills. Every project is an opportunity to learn
            something new and push my abilities further. I thrive in
            collaborative environments where ideas are shared freely, and I'm
            excited to contribute to teams building innovative, user-focused
            applications.
          </p>
        </div>
        <SkillImage />
      </div>
    </section>
  );
}
