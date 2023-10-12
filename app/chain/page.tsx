"use client";

import React, { useState } from "react";
import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from "@react-spring/web";
import { data } from "./data";
import { InnerWrapper, Wrapper } from "./style";
import { Grid } from "@mui/material";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";

export const Chain = () => {
  const [open, set] = useState(false);
  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20%",
      background: "Orchid",
    },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "Orchid",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <>
      <DraggableHomeButton />
      <Wrapper container justifyContent="center" alignItems="center">
        <InnerWrapper container justifyContent="center" alignItems="center">
          <animated.div
            style={{ ...rest, width: size, height: size }}
            className="container"
            onClick={() => set((open) => !open)}
          >
            {transition((style, item) => (
              <animated.div
                className="item"
                style={{ ...style, background: item.background }}
              >
                <Grid container justifyContent="center">
                  {item.name}
                </Grid>
              </animated.div>
            ))}
          </animated.div>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Chain;
