"use client";

import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ButtonContainer, CustomButton, Wrapper,} from "@/app/magneticEffect/style";
import DraggableHomeButton from "@/components/DraggableHomeButton/DraggableHomeButton";
//import './animation';

const MagneticEffect = () => {
    const ref = useRef<any>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(ref.current, "x", {duration: 1, ease: "elastic.out(1,0.3)"})
        const yTo = gsap.quickTo(ref.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const mouseMove = (e: any) => {
            const {clientX, clientY} = e;
            const {width, height, left, top} = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x)
            yTo(y)
        }

        const mouseLeave = (e: any) => {
            xTo(0);
            yTo(0);
        }

        ref.current.addEventListener("mousemove", mouseMove);
        ref.current.addEventListener("mouseleave", mouseLeave);

        return () => {
            ref.current.addEventListener("mousemove", mouseMove);
            ref.current.addEventListener("mouseleave", mouseLeave);
        }
    }, [])

    return (
        <>
            <DraggableHomeButton/>
            <Wrapper
                container
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <ButtonContainer
                    ref={ref}
                    className="magnetic-button"
                >
                    <CustomButton>Hi:)</CustomButton>
                </ButtonContainer>
            </Wrapper>
        </>
    );
};

export default MagneticEffect;
