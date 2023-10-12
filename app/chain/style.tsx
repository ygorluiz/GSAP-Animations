import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  height: 100vh;
`;
export const InnerWrapper = styled(Grid)`
  height: 25em;

  .container {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 0.5fr));
    grid-gap: 25px;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.05);
  }

  .item {
    display: flex;
    align-items: center;
    width: 300px;
    height: 100px;
    border-radius: 5px;
    font-size: 24px;
    will-change: transform, opacity;
  }
`;
