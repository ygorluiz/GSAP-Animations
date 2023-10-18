"use client";

import React from "react";
import "../styles/globals.css";
import Head from "@/meta/Head";
import {LayoutProps} from "@/interfaces/pages";
import StyledComponentsRegistry from "./registry";
import Providers from "@/config/providers";

const Layout = ({children}: LayoutProps) => {
    return (
        <html lang="en" style={{minWidth: "320px"}}>
        <Head/>
        <body>
            {/*   <script
          async
          src="https: //cdnjs.cloudflare.com/ajax/libs/gsap/3.0.0/gsap.min.js"
        ></script>*/}
            <StyledComponentsRegistry>
                <Providers>{children}</Providers>
            </StyledComponentsRegistry>
        </body>
        </html>
    );
};
export default Layout;
