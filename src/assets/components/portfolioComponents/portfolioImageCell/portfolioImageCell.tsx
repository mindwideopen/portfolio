import React from 'react';
import styled from "styled-components";

type ImageCellPropsType = {
    width?: string,
    height?: string,
    src: string

}

const PortfolioImageCell = (props:ImageCellPropsType) => {

    return (

        <img  src={props.src} width={'358px'} height={'411px'} alt='img'/>    );

};

export default PortfolioImageCell;



// type PortfolioImageCellStyled = {
//     width?: string,
//     height?: string,
//     src: string
//
// }
// const PortfolioImageCellStyled = styled.image<PortfolioImageCellStyled>`
//   width: ${props => props.width};
//   height: ${props => props.height};
//
//
//
// `




