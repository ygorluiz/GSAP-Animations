import styled from 'styled-components';
import {Grid} from '@mui/material';

export const Wrapper = styled(Grid)`
  height: 100vh;
  max-width: unset;

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
`;