import styled from 'styled-components';
import {Grid} from '@mui/material';

export const Wrapper = styled(Grid)`
  margin: 100px 0;
  .trailsText {
    position: relative;
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: black;
    font-size: 6em;
    font-weight: 800;
    letter-spacing: -0.05em;
    will-change: transform, opacity;
    overflow: hidden;
  }

  .trailsText > div {
    padding-right: 0.05em;
    overflow: hidden;
  }

  .container {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }

`;