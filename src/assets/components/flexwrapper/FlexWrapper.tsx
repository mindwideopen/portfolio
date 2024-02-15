import React from 'react';
import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    height?: string
    textAlign?: string,
    backgroundColor?:string,
    gap?: string,



}

const FlexWrapper = styled.div<FlexWrapperPropsType>`
  
  display: flex;
    flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  height: ${props => props.height || 'auto'};
  text-align:${props => props.textAlign || 'left'}; 
  gap: ${props => props.gap || '0'};
  
  
  
 
`


export default FlexWrapper;