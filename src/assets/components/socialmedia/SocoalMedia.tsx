import React from 'react';
import Icon from "../icon/Icon";
import flexWrapper from "../flexwrapper/FlexWrapper";
import FlexWrapper from "../flexwrapper/FlexWrapper";
import styled from "styled-components";

const SocialMedia = () => {
    return (

        <SocialMediaStyled>
            <FlexWrapper >

                <a href="#"><Icon iconId={'sbr'}/></a>
                <a href="#"><Icon iconId={'facebook'}/></a>
            </FlexWrapper>
        </SocialMediaStyled>




    );
};
const SocialMediaStyled = styled.div` 
    

  
`

export default SocialMedia;