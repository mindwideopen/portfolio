import React from 'react';
import ContentAboutMe from "./ContentAboutMe";
import styled from "styled-components";
import SectionTitle from "../../assets/components/sectionTitle/SectionTitle";
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";
import TechnologyRate from "../../assets/components/technologyrate/TechnologyRate";

const SectionAboutMe = () => {
    return (<SectionAboutMeStyled>
            <FlexWrapper wrap={'wrap'} justify={'center'} align={'center'}>
                <ContentAboutMe/>
                <TechnologyRate/>
            </FlexWrapper>


            </SectionAboutMeStyled>
    );
};

const SectionAboutMeStyled=styled.div`
  
background-color: cadetblue;
  
  
`


export default SectionAboutMe;