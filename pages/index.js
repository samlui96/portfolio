import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Intro from "@/components/Intro";
import FlipCard from "@/components/FlipCard";
// import Instagram from '../components/Instagram';

const skills = [
  {
    id: "1",
    image: "",
    title: "Programming Languages",
    text: ["JavaScript", "TypeScript", "HTML", "CSS", "Java8", "C++", "Python"],
  },
  {
    id: "2",
    image: "",
    title: "Libraries & Frameworks",
    text: [
      "React",
      "Redux",
      "Next",
      "Vue",
      "Express",
      "PyCharm",
      "Spring Boot",
      "Spring MVC",
      "Docker",
      "IntelliJ",
      "Junit",
    ],
  },
  {
    id: "3",
    image: "",
    title: "DataBase",
    text: ["MySQL", "MSSQL"],
  },
  {
    id: "4",
    image: "",
    title: "Tools & Platforms",
    text: [
      "Git",
      "Webpack",
      "Docker",
      "Wix",
      "Shopify",
      "Firebase",
      "ThingSpeak",
      "IFTTT",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Home Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Intro
          scroll={true}
          heading="Hi! I am Pak Sum Lui"
          message="Full Stack Developer / Web Developer / Programmer"
          buttonPath="#skill"
          buttonMessage="Skills"
        />
        <FlipCard path="skill" title="Skills" cardArray={skills}></FlipCard>
      </div>
    </div>
  );
}
