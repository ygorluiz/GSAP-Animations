"use client";

import React from "react";
import "../styles/globals.css";
import Head from "@/meta/Head";
import { LayoutProps } from "@/interfaces/pages";
import { Body } from "@/styles/styles";
import StyledComponentsRegistry from "./registry";
import Providers from "@/config/providers";

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" style={{ minWidth: "320px" }}>
      <Head />
      <Body>
        <script
          async
          src="https: //cdnjs.cloudflare.com/ajax/libs/gsap/3.0.0/gsap.min.js"
        ></script>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </Body>
    </html>
  );
};
export default Layout;
