import styled from "styled-components";
import { Button, Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  background-color: #000000;
  height: 100vh;
  color: white;

  .magnetic-button {
    border: none;
    padding: 0;
    background: transparent;
    cursor: pointer;
    position: relative;
    z-index: 1;
    touch-action: none;
  }
`;

export const ButtonContainer = styled.div`
  height: 150px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #85acf1;
  font-weight: bold;
  margin: 40px auto;
  //border: 1px dashed #85acf1 !important;
`;

export const CustomButton = styled(Button)`
  border: 1px solid #85acf1;
  padding: 12px;
  color: white;
  height: 50px;
  width: 90px;
  text-transform: capitalize;
  --c: cornflowerblue;
  --g: linear-gradient(var(--c) 0 0) no-repeat;

  box-shadow: 0 0 0 0.1em inset var(--c);
  background: var(--g) calc(var(--p, 0%) - 100%) 0%,
    var(--g) calc(200% - var(--p, 0%)) 0%,
    var(--g) calc(var(--p, 0%) - 100%) 100%,
    var(--g) calc(200% - var(--p, 0%)) 100%;
  background-size: 51% calc(var(--p, 0%) / 2 + 1%);
  outline-offset: 0.1em;
  transition: background-size 0.4s, background-position 0s 0.4s;

  &:hover {
    --p: 100%;
    transition: background-position 0.4s, background-size 0s;
  }
`;
