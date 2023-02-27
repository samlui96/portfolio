import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Intro from '@/components/Intro';
import FlipCard from '@/components/FlipCard';
import LoadingPage from '@/components/LoadingPage';
// import Instagram from '../components/Instagram';

const skills = [
  {
    id: "1",
    image: "",
    title: "Programming Languages",
    text: ['Java', 'C++', 'JavaScript', 'Python'],
  },
  {
    id: "2",
    image: "",
    title: "Technologies",
    text: ['React', 'Redux', 'NextJS', 'VueJS', 'VueX', 'Vuetify', 'ExpressJS', 'Docker', 'Tailwind CSS'],
  },
  {
    id: "3",
    image: "",
    title: "DateBase",
    text: ["MySQL", "MSSQL"],
  },
];


export default function Home() {
  return (
    <div>
      <LoadingPage content={
      <div>
        <Head>
          <title>Home Page</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Intro 
          heading='Hi! I am Pak Sum Lui' 
          message='Frontend Developer / Web Developer / Programmer'
          buttonPath='#skill'
          buttonMessage='Skills'
        />
        <FlipCard path='skill' title='Skills' cardArray={skills}></FlipCard>
        </div>}
      />
    </div>
  );
}
