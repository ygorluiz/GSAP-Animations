import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(135deg, #ba80f5 0%, #7ebaf6 100%);
    transform-origin: 0;
  }
`;
