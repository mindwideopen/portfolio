import React from 'react';
import styled from "styled-components";

type SingleDescriptionPropsType = {
    description?: string,
    margin?:string
}
export const SingleDescription = (props:SingleDescriptionPropsType) => {
    return (
        <SingleDescriptionStyled margin={props.margin}>

            {props.description}

        </SingleDescriptionStyled>
    );
};

type SingleDescriptionStyledPropsType = {

    margin?:string
}
const SingleDescriptionStyled = styled.div<SingleDescriptionStyledPropsType>`
  color: red;
  width: 531px;
  margin: ${props => props.margin};
  font-size: 16px;
  
  
;
    
`




