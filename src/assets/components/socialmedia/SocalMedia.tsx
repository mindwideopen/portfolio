import React from 'react';

import styled from "styled-components";
import IconSocial from "../icon/IconSocial";




const SocialMedia = () => {
    return (


    <SocialMediaStyled>
        <a href="#"><IconSocial iconId={'fb'}/></a>
        <a href="#"><IconSocial iconId={'pinterest'}/></a>
        <a href="#"><IconSocial iconId={'x'}/></a>
        <a href="#"><IconSocial iconId={'youtube'}/></a>
        <a href="#"><IconSocial iconId={'instagram'}/></a>

    </SocialMediaStyled>





    );
};


const SocialMediaStyled=styled.div`
  margin-top: auto;
  
  `

export default SocialMedia;