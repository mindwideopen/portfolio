import React from 'react';
import styled from "styled-components";
import Intro from "../../assets/components/greeting/Greeting";


const Main = () => {
    return (
        <MainStyled>
            <Intro/>
        </MainStyled>
    );
};

const MainStyled=styled.main`
  
  min-height: 368px;
  
  background-color: cornflowerblue;
  

`

export default Main;