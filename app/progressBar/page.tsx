"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { Wrapper } from "./style";
import { LoremIpsum } from "@/app/progressBar/LoremIpsum";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <DraggableHomeButton />
      <Wrapper container justifyContent="center">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <h1 className="bg-center">useScroll Progress Bar demo</h1>
        <LoremIpsum />
      </Wrapper>
    </>
  );
};

export default ProgressBar;
