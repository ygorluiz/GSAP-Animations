"use client";

import { NextPage } from "next";
import { Button } from "@/components/Button";
import { data } from "@/app/data";
import { ButtonContainer, Container, Text, Wrapper } from "@/styles/styles";
import Cursor from "@/components/Cursor/Cursor";
import React from "react";
import useMousePosition from "@/utils/helper";

const Home: NextPage = () => {
  const mousePosition = useMousePosition();

  return (
    <Container container id="animation">
      <Cursor />

      <Wrapper container justifyContent="center">
        <h1>Demo verschiedener Animationen und Scroll Effekte</h1>
        <Text>Your cursor position: {JSON.stringify(mousePosition)}</Text>
        <ButtonContainer container justifyContent="center">
          {data.map((item) => (
            <Button link={item.link} text={item.text} key={item.text} />
          ))}
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
