import React from 'react';
import {CustomButton} from './style';
import {ButtonProps} from "@/components/Button/interfaces";


export function Button({text, link, backgroundcolor}: ButtonProps) {
  return (
    <CustomButton href={link} backgroundcolor={backgroundcolor}>
      {text}
    </CustomButton>
  )
}
