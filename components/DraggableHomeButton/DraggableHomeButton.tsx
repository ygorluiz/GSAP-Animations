"use client";

import React, {useEffect} from "react";
import {gsap} from "gsap";
import HomeIcon from "@mui/icons-material/Home";
import {Draggable} from "gsap/Draggable";
import {CustomLink} from "@/components/DraggableHomeButton/style";

gsap.registerPlugin(Draggable);
const DraggableHomeButton = () => {
    useEffect(() => {
        Draggable.create("#draggable", {
            type: "x,y",
            pin: true,
            bounds: "body",
            edgeResistance: 0.65,
            inertia: true,
        });
    }, []);

    return (
        <CustomLink href="/" id="draggable" className="z-10">
            <HomeIcon/>
        </CustomLink>
    );
};

export default DraggableHomeButton;
