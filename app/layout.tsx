"use client";

import React from "react";
import "../styles/globals.css";
import Head from "@/meta/Head";
import {LayoutProps} from "@/interfaces/pages";
import StyledComponentsRegistry from "./registry";
import Providers from "@/config/providers";
import { StyledEngineProvider } from '@mui/material/styles';
const Layout = ({children}: LayoutProps) => {
    return (
        <html lang="en" style={{minWidth: "320px"}}>
        <Head/>
        <body className='bg-gray-100 m-0'>
            <StyledComponentsRegistry>
            <StyledEngineProvider injectFirst>
                <Providers>{children}</Providers>
            </StyledEngineProvider>
            </StyledComponentsRegistry>
        </body>
        </html>
    );
};
export default Layout;
