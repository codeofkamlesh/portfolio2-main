"use client";
import React from "react";
import Image from "next/image";
import "../styles/hero2.module.css";

const Hero2: React.FC = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="heading">Project</h1>
        <h1 className="heading">Management</h1>
        <p className="description">
          Image, Videos, PDFs, and audio files are supported. Create math expressions and diagrams from the app. Take photos with the mobile and save them to a note.
        </p>
        <button className="getStartedButton">Get Started</button>
      </div>

      <div className="imageWrapper">
        <Image 
          src="/pic2.png" 
          alt="Project Management" 
          width={500} 
          height={400} 
          className="image" 
          priority
        />
      </div>
    </div>
  );
};

export default Hero2;
