"use client";

import React, {useEffect} from "react";
import "./style.css";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {TweenMax} from "gsap/all";
import {pageData, zoomImg} from "@/app/gsap/data";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";
import useMousePosition from "@/utils/helper";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax);

const Gsap = () => {
    const clientX = useMousePosition();

    function HorizontalScrollEffect() {
        let images = gsap.utils.toArray(".img");
        gsap.set(".img", {backgroundPosition: "43% 100%"});
        gsap.to(images, {
            xPercent: -45 * images.length,
            ease: "none",
            scrollTrigger: {
                trigger: ".box",
                pin: true,
                scrub: 2,
                end: "+=100%",
            },
            backgroundPosition: "60% 100%",
        });
    }

    /*
              gsap.to("#zoom", {
                clipPath: "inset(0%)",
                duration: 3,
                ease: "sine.inOut",
                scrollTrigger: {
                  trigger: "section",
                  start: "top top",
                  end: "+=100%",
                  pin: true,
                  scrub: true,
                  // markers: true
                },
              });
            */

    function SlideEffect() {
        gsap.to(".slideRight", {
            scrollTrigger: ".slideRight",
            x: 80,
        });
        gsap.to(".slideLeft", {
            scrollTrigger: {
                trigger: ".slideLeft",
                scrub: 1,
            },
            x: -80,
        });
        gsap.to(".slideUp", {
            scrollTrigger: ".slideUp",
            y: -80,
        });
    }

    function ZoomEffect() {
        let LandingPageScrollTrigger = gsap.timeline({
            scrollTrigger: {
                trigger: "#ImgWrapper",
                start: "0% 0%",
                end: "100% 0%",
                pin: "#ImgWrapper",
                scrub: 2.5,
            },
        });
        LandingPageScrollTrigger.to(
            "#ImgWrapper #img7",
            {transform: "translateZ(4500px)"},
            0
        )
            .to("#ImgWrapper #img6", {transform: "translateZ(3700px)"}, 0)
            .to("#ImgWrapper #img5", {transform: "translateZ(3100px)"}, 0)
            .to("#ImgWrapper #img4", {transform: "translateZ(2800px)"}, 0)
            .to("#ImgWrapper #img3", {transform: "translateZ(2600px)"}, 0)
            .to("#ImgWrapper #img2", {transform: "translateZ(2400px)"}, 0)
            .to("#ImgWrapper #img1", {transform: "translateZ(2200px)"}, 0);
    }

    function OnMove(clientX: number) {
        const snapEdges = gsap.utils.snap({
                values: [0, window.innerWidth],
                radius: 100,
            }),
            widthToProgress = gsap.utils.mapRange(0, window.innerWidth, 0, 1),
            interpColor = gsap.utils.interpolate(
                "linear-gradient(#e66465, #9198e5)",
                "linear-gradient(#c01fa4, #4755f1)"
            ),
            widthToColor = gsap.utils.pipe(snapEdges, widthToProgress, interpColor);

        const container = document.getElementById(
            "backgroundcolor-change"
        ) as HTMLInputElement;
        container.style.background = widthToColor(clientX);

        console.log("___", widthToColor(clientX));
    }

    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "smooth-wrapper",
            content: "smooth-content",
        });
        HorizontalScrollEffect();
        SlideEffect();
        ZoomEffect();
    }, []);

    return (
        <div id="smooth-wrapper">
            <DraggableHomeButton/>
            <div className="smooth-content">
                <div className="largeContainer font-bold text-4xl">Scroll ;)</div>
                <div className="box">
                    <div className="img"></div>
                    <div className="img"></div>
                    <div className="img"></div>
                    <div className="img"></div>
                    <div className="img"></div>
                    <div className="img last" id="zoom"></div>
                </div>
                <div className="contentContainer first">
                    <div className="innerContainer">
                        <div className="slideRight text-1xl">{pageData.middleText}</div>
                    </div>
                </div>
                <div className="contentContainer second">
                    <div className="innerContainer">
                        <div className="slideLeft text-2xl">{pageData.middleText}</div>
                    </div>
                </div>
                <div className="contentContainer third">
                    <div className="slideUp text-1xl">{pageData.middleText}</div>
                </div>
                <div id="ImgWrapper">
                    <img id="img1" src={zoomImg[0]} alt="img1"/>
                    <img id="img2" src={zoomImg[1]} alt="img2"/>
                    <img id="img3" src={zoomImg[2]} alt="img3"/>
                    <img id="img4" src={zoomImg[3]} alt="img4"/>
                    <img id="img5" src={zoomImg[4]} alt="img5"/>
                    <img id="img6" src={zoomImg[5]} alt="img6"/>
                    <img id="img7" src={zoomImg[6]} alt="img7"/>
                    <div className="afterZoomContainer">
                        <div className="font-bold text-4xl">After Zoom</div>
                    </div>
                </div>
                <div
                    className="halfContainer p-5 flex-col"
                    onMouseMove={() => OnMove(clientX.x)}
                    id="backgroundcolor-change"
                >
                    <div className="font-bold text-4xl p-5">
                        Move the mouse to left and right
                    </div>
                    <div>
                        <p>{pageData.longText}</p>
                        <br/>
                        <p>{pageData.longText}</p>
                    </div>
                </div>
                <div className="largeContainer font-bold text-4xl">End</div>
            </div>
        </div>
    );
};

export default Gsap;
