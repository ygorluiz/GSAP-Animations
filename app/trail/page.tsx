"use client";

import React, {useState} from "react";

import {Wrapper} from "./style";
import {TrailComponent} from "@/app/trail/partial/TrailComponent";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";

const Trail = () => {
    const [open, set] = useState(true);
    return (
        <Wrapper
            container
            justifyContent="center"
            className="container"
            onClick={() => set((state) => !state)}
        >
            <DraggableHomeButton/>
            <h1 className="className='font-bold text-3xl mt-8 text-gray-800 bg-center w-screen text-center">
                React-Rpring - useTrail
            </h1>
            <TrailComponent open={open}>
                <span>OEV</span>
                <span>Online</span>
                <span>Dienste</span>
                <span>GmbH</span>
            </TrailComponent>
        </Wrapper>
    );
};

export default Trail;
