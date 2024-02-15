import React from 'react';
import styled from "styled-components";


type TechnologyBarPropsType = {
    technology?: string,
    percentage?: number
}

type TechnologyBarStyledPropsType = {
    technology?: string,
    percentage?: number
}
const TechnologyBar = (props: TechnologyBarPropsType) => {
    return (
        <TechnologyBarStyled percentage={props.percentage} technology={props.technology}>
            <div className={'base'}>
                <div className={'scale'}></div>
            </div>
        </TechnologyBarStyled>
    );
};


const TechnologyBarStyled=styled.div<TechnologyBarStyledPropsType>`  
  margin: 20px;
 
  
  .base {
   display: flex;
   position: relative;
   width: 620px;
   height: 5px;
   background-color: green;
   
 }
  .base:before {
    position: absolute;
    content: '${props => props.technology}';
    top: -30px
  }
  .base:after {
    position: absolute;
    content: '${props => props.percentage}%';
    top: -30px;
    left: ${props => props.percentage}%
  }  
  .scale {
    position: absolute;
    width: ${props => props.percentage}%;
    height: 5px;
    background-color: red;
    
    
  }
  
  
  

`
export default TechnologyBar;