"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function SkillImage() {
  const skillData = [
    {
      id: 1,
      name: "JavaScript",
      image: "/images/skills/js.png",
    },
    {
      id: 2,
      name: "HTML",
      image: "/images/skills/html.png",
    },
    {
      id: 3,
      name: "MongoDB",
      image: "/images/skills/mdb.png",
    },
    {
      id: 4,
      name: "Next.js",
      image: "/images/skills/next.svg",
    },
    {
      id: 5,
      name: "React.js",
      image: "/images/skills/react.svg",
    },
    {
      id: 6,
      name: "SQL",
      image: "/images/skills/sql.svg",
    },
    {
      id: 7,
      name: "TailwindCSS",
      image: "/images/skills/tailwind.svg",
    },
    {
      id: 8,
      name: "C++",
      image: "/images/skills/cpp.png",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <ul
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center pt-8"
    >
      {skillData.map((skill, index) => (
        <motion.li
          key={skill.id}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 relative">
            <Image
              src={skill.image}
              alt={skill.name}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-white text-sm md:text-base font-medium">
            {skill.name}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}
