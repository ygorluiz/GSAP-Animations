"use client";

import React, { useEffect } from "react";
import "./style.css";
import { gsap } from "gsap";
import { DemoWrapper, Footer, Header } from "@/app/scrollingEffect/styles";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollingEffect = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.scrollingElement.scrollTo(0, 0);

    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [x, xEnd] =
        index % 2
          ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });
    ScrollSmoother.create({
      wrapper: "smooth-wrapper",
      content: "smooth-content",
    });
  }, []);

  /*  let smoother = ScrollSmoother.create({
                  wrapper: "smooth-wrapper",
                });*/

  return (
    <DemoWrapper id="smooth-wrapper">
      <div id="smooth-content">
        <Header>
          <div>
            <h1>ScrollTrigger</h1>
            <h2>demo</h2>
          </div>
        </Header>
        <section className="demo-text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=128"
                width="450"
              />
            </li>
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=10"
                width="450"
              />
            </li>
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=91"
                width="450"
              />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=12"
                width="450"
              />
            </li>
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=20"
                width="450"
              />
            </li>
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=145"
                width="450"
              />
            </li>
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=22"
                width="450"
              />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=61"
                width="450"
              />
            </li>
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=70"
                width="450"
              />
            </li>
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=112"
                width="450"
              />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=88"
                width="450"
              />
            </li>
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=35"
                width="450"
              />
            </li>
            <li>
              <img
                height="317"
                src="https://source.unsplash.com/random/450x317?sig=92"
                width="450"
              />
            </li>
          </ul>
        </section>
        <section className="demo-text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>
        <Footer>
          <p>End</p>
        </Footer>

        <script async src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
        <script
          async
          src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"
        ></script>
        <script
          async
          src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"
        ></script>
      </div>
    </DemoWrapper>
  );
};

export default ScrollingEffect;
