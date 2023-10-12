"use client";

import React, { useEffect } from "react";
import { Wrapper } from "./style";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";

export const AirPods = () => {
  let html = document.documentElement;

  useEffect(() => {
    const canvas = document.getElementsByTagName("canvas")[0];
    if (canvas === null) return; // current may be null
    const context = canvas.getContext("2d");
    if (context == null) return; // context may be null
    //Our first draw
    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 1158;
    canvas.height = 770;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index: number) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );
      console.log(frameIndex);
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });
  }, []);

  const frameCount = 147;
  const currentFrame = (index: number) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, "0")}.jpg`;

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  preloadImages();
  return (
    <>
      <DraggableHomeButton />
      <Wrapper container>
        <canvas id="hero-lightpass" />
      </Wrapper>
    </>
  );
};

export default AirPods;
