import React from "react";
import Head from "next/head";

export const Header = () => (
    <Head>
        <title>Animations</title>
        <meta name="description" content="Animations"/>
        <link rel="icon" href="/favicon.ico"/>
        <script async src="https://unpkg.co/gsap@3/dist/gsap.min.js"/>
        <script async src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"/>
    </Head>
);

export default Header;
