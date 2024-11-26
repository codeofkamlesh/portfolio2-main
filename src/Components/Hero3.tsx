"use client";
import React from "react";
import "../styles/hero3.module.css";
import { FaArrowRight } from "react-icons/fa";

const Hero3: React.FC = () => {
  return (
    <div className="hero3">
      <div className="imageWrapper">
        <div className="image"></div>
      </div>

      <div className="content">
        <h1 className="heading">Work</h1>
        <h1 className="heading">Together</h1>
        <p className="description">
          With White Space, share your notes with your colleagues on them. You
          can also publish a note to the internet and share the URL with others.
        </p>
        <button className="ctaButton">
          Try it now <FaArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero3;
