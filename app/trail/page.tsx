"use client";

import React, {useState} from "react";

import {Wrapper} from "./style";
import {Title} from "@/styles/styles";
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
            <Title>react-spring useTrail demo</Title>
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
