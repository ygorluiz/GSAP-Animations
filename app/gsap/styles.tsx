import styled from "styled-components";
import { Grid } from "@mui/material";

export const DemoWrapper = styled(Grid)``;
export const Header = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Footer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
`;

export const Text = styled(Grid)`
  display: flex;
  font-size: clamp(8rem, 15vw, 16rem);
  line-height: 1;
  font-weight: 900;
`;
