import styled from 'styled-components';
import {Grid} from "@mui/material";

export const Wrapper = styled(Grid)`
  height: 500vh;
  background-color: #000;

  canvas {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 100vw;
    max-height: 100vh;
  }
`;