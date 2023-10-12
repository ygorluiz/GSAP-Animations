"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import HomeIcon from "@mui/icons-material/Home";
import { Draggable } from "gsap/Draggable";
import { CustomLink } from "@/components/DraggableHomeButton/style";

gsap.registerPlugin(Draggable);
const DraggableHomeButton = () => {
  useEffect(() => {
    /* TweenLite.set("#draggable", { x: 30, y: 30 });*/

    Draggable.create("#draggable", {
      type: "x,y",
      bounds: "body",
      edgeResistance: 0.65,
      inertia: true,
    });
  }, []);

  return (
    <CustomLink href="/" id="draggable" className="z-10">
      <HomeIcon />
    </CustomLink>
  );
};

export default DraggableHomeButton;
