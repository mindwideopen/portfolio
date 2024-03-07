import React from 'react';
import styled from "styled-components";
import SocialMedia from "../socialmedia/SocalMedia";
import FlexWrapper from "../flexwrapper/FlexWrapper";

const Intro = () => {
    return (
<IntroStyled>

        <div>Hello, I'm</div>      {/*use <span> instead*/}
        <div>Nik Lit</div>          {/*use <span> instead*/}
        <h1>Graphic Designer & Ceo of Graphic Type. I love to provide quality works.</h1>
        <button>GET IN TOUCH</button>
        <SocialMedia/>

</IntroStyled>


    );
};

const IntroStyled = styled.div`
  
  height: 100%;
  max-width: 368px;  

`
export default Intro;