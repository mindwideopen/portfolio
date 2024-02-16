import React from 'react';
import styled from "styled-components";
import SocialMedia from "../socialmedia/SocalMedia";
import FlexWrapper from "../flexwrapper/FlexWrapper";

const Intro = () => {
    return (

            <IntroStyled>
                <FlexWrapper direction={'column'} height={'100%'}>
                    <div>Hello, I'm</div>
                    <div>Nik Lit</div>
                    <div><h1>Graphic Designer & Ceo of Graphic Type. I love to provide quality works.</h1></div>
                    <button>GET IN TOUCH</button>
                    <SocialMedia/>
                </FlexWrapper>

            </IntroStyled>


    );
};

const IntroStyled = styled.main`
  height: 100%;
  max-width: 368px;
  display: flex;
  flex-direction: column;

  button {
    width: fit-content;
  }

  
  
  
`
export default Intro;