"use client";

import {NextPage} from "next";
import {Button} from "@/components/Button";
import {data} from "@/app/data";
import {ButtonContainer, Container, Wrapper} from "@/styles/styles";
import React from "react";
import Cursor from "@/components/Cursor/Cursor";

const Home: NextPage = () => {
    return (
        <Container container id="animation">
            <Cursor/>
            <Wrapper container justifyContent="center">
                <h1 className='font-bold text-4xl mt-8 text-gray-800'>Demo verschiedener Animationen und Scroll
                    Effekte</h1>
                <ButtonContainer container justifyContent="center">
                    {data.map((item) => (
                        <Button link={item.link} text={item.text} key={item.text}/>
                    ))}
                </ButtonContainer>
            </Wrapper>
        </Container>
    );
};

export default Home;
