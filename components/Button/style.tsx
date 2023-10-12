import styled from 'styled-components';
import {Button} from '@mui/material';

export const CustomButton = styled(Button)<{backgroundcolor?: string}>`
  color: #fff !important;
  font-size: 15px !important;
  cursor: pointer !important;
  background-color: ${(props) => (props.backgroundcolor) || '#7ac0ee'} !important;
  padding: 15px 30px !important;
  text-transform: capitalize !important;
  margin: 80px 10px !important;
  transition: .5s !important;

  &:hover {
    background-color: brightness(90%);
  /*  background-color:  ${(props) => (props.backgroundcolor) || '#77bbea'} !important;*/
    transform: scale(1.1) !important;
  }
`;