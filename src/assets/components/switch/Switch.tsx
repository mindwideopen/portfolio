import React from 'react';
import styled, {css} from "styled-components";

type SwitchPropsType = {
    selected?: boolean
}

export const SwitchStyled=styled.div<SwitchPropsType>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #E5E5E5;
  margin: 60px 8px;
  &:hover{
    background-color: #FBA820;
    cursor: pointer;
    
    
  }
  ${props => props.selected && css <SwitchPropsType>`    
    background-color: #FBA820
  `}
 

`

