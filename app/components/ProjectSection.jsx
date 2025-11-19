"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Volleyball Stat Tracking",
      description:
        "Statistic tracker for volleyball. Calculates your lifetime, seasonal, and per game stats",
      image: "/images/projects/volleyball-stat-track.png",
      tag: ["All"],
      gitURL: "https://github.com/lo-andrew/volleyball-stat-track",
      previewURL: "https://volleyball-stat-track.vercel.app/",
    },
    {
      id: 2,
      title: "Flags of the World",
      description: "A quiz on the flags of various states",
      image: "/images/projects/flags-of-the-world.png",
      tag: ["All"],
      gitURL: "https://github.com/lo-andrew/flags-quiz",
      previewURL: "https://flags-quiz-alpha.vercel.app/",
    },
    {
      id: 3,
      title: "Climate Solutions",
      description: "Site to view and manage different projects",
      image: "/images/projects/climate-solutions.png",
      tag: ["All"],
      gitURL: "https://github.com/lo-andrew/climatesolution",
      previewURL: "https://climatesolution.onrender.com",
    },
    {
      id: 4,
      title: "Delivery Route Finder",
      description:
        "Finds best delivery route for a given map (C++ application), GitHub view only",
      image: "/images/projects/project-4.png",
      tag: ["All"],
      gitURL: "https://github.com/lo-andrew/delivery-management-project",
      previewURL: "",
    },
    {
      id: 5,
      title: "NCAA Hitting Percentage Spring Boot backend",
      description:
        "A backend developed with Spring Boot with basic CRUD operations. Data scraped using a Python web scraper, stored in a PostgreSQL database",
      image: "/images/projects/ncaa_scraped.png",
      tag: ["All"],
      gitURL: "https://github.com/lo-andrew/ncaa-hitpercentages",
      previewURL: "",
    },
  ];

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgURL={project.image}
              gitURL={project.gitURL}
              previewURL={project.previewURL}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
