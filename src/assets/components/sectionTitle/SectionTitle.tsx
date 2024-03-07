import React from 'react';
import styled from "styled-components";


type SectionTitlePropsType = {
    text: string,
    margin?: string
}

export  const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <SectionTitleStyled margin={props.margin}>
            <p>{props.text}</p>
        </SectionTitleStyled>


    );
};

export default SectionTitle;

type SectionTitleStyledPropsType = {
    margin?: string
}

const SectionTitleStyled = styled.p<SectionTitleStyledPropsType>`
    margin: ${props => props.margin||'0'}
  

`