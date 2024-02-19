import React from 'react';
import styled from "styled-components";


type ImageCellPropsType = {

    src: string

}

const PortfolioImageCell = (props:ImageCellPropsType) => {

    return (
        <ImageCellStyled src={props.src}/>


    )
};

export default PortfolioImageCell;



const ImageCellStyled=styled.img`
  object-fit: cover;
  

    width: 412px;
  height: 358px;
 
`
