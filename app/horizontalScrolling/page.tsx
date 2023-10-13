"use client";

import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./style.css";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";

gsap.registerPlugin(ScrollTrigger);
const HorizontalScrolling = () => {
    useEffect(() => {
        let sections = gsap.utils.toArray(".panel");
        const container = document.querySelector(".container") as HTMLElement;
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                end: () => "+=" + container.offsetWidth,
            },
        });
    }, []);

    return (
        <div className='basis-full'>
            <DraggableHomeButton/>
            <div className="firstContainer">
                <h1>Horizontal scrolling with three sections</h1>
                <h2>First Container</h2>
            </div>
            <div className="container">
                <div className="description panel blue">
                    <div>
                        SCROLL DOWN
                        <div className="scroll-down">
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>

                <section className="panel orange">ONE</section>
                <section className="panel green">TWO</section>
                <section className="panel purple">THREE</section>
            </div>
            <div className="lastContainer">Last Container</div>
        </div>
    );
};

export default HorizontalScrolling;
