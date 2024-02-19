import React from 'react';
import styled from "styled-components";

type SingleDescriptionPropsType = {
    description?: string,
    margin?: string
}
export const SingleDescription = (props: SingleDescriptionPropsType) => {
    return (

        <div>
            {props.description}
        </div>


    );
};

type SingleDescriptionStyledPropsType = {

    margin?: string
}
const SingleDescriptionStyled = styled.div<SingleDescriptionStyledPropsType>`
  color: red;
  width: 531px;

  font-size: 16px;;

`




