import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    action?: string,
    color?: string,
    backgroundColor?: string,
    border?: string


}


export const Button = (props: ButtonPropsType) => {
    return (
        <ButtonStyled color={props.color} backgroundColor={props.backgroundColor} border={props.border}>
            {props.action}
        </ButtonStyled>

    );
};

type ButtonStyledPropsType = {
    action?: string,
    color?: string,
    backgroundColor?: string,
    border?: string

}
const ButtonStyled = styled.button<ButtonStyledPropsType>`
  
  margin-right: 20px;
  color: ${props => props.color || 'red'};
  border: ${props => props.border|| 'none'};
  background-color: ${props => props.backgroundColor || 'green'};
  
  

`



