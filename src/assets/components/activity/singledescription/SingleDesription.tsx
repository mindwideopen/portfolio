import React from 'react';
import styled from "styled-components";

type SingleDescriptionPropsType = {
    description?: string,
    margin?: string,
    font?:string,
    fontSize?: string,
    lineHeight?: string

}
export const SingleDescription = (props: SingleDescriptionPropsType) => {
    return (

        <SingleDescriptionStyled font={props.font} fontSize={props.fontSize}  lineHeight={props.lineHeight} margin={props.margin}>
            {props.description}
        </SingleDescriptionStyled>


    );
};



type  SingleDescriptionStyledPropsType = {
    description?: string,
    margin?: string,
    font?:string,
    fontSize?: string,
    lineHeight?: string

}
const SingleDescriptionStyled= styled.p<SingleDescriptionStyledPropsType>`
  max-width: 533px;

  margin: ${props=> props.margin};
  
  font: ${props => props.font};
  font-size: ${props => props.fontSize};
  line-height:${props => props.lineHeight}   
    
`





