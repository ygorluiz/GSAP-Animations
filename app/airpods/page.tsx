"use client";

import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import './style.css'

gsap.registerPlugin(ScrollTrigger);
const AirPods = () => {

    useEffect(() => {
        const canvas = document.getElementsByTagName('canvas')[0];
        const context = canvas.getContext("2d");

        canvas.width = 1158;
        canvas.height = 770;

        const frameCount = 147;
        const currentFrame = (index: any) => (
            `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
        );

        const images: any = []
        const airpods = {
            frame: 0
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }

        gsap.to(airpods, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                scrub: 0.5
            },
            onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
        });

        images[0].onload = render;

        function render() {
            // @ts-ignore
            context.clearRect(0, 0, canvas.width, canvas.height);
            // @ts-ignore
            context.drawImage(images[airpods.frame], 0, 0);
        }
    }, []);

    return (
        <canvas id="hero-lightpass"></canvas>
    );
};

export default AirPods;
