import React from 'react';
import styled from "styled-components";
import SectionTitle from "../../assets/components/sectionTitle/SectionTitle";
import PortfolioNavigation from "../../assets/components/portfolioNavigation/PortfolioNavigation";
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";

const Portfolio = () => {
    return <PortfolioStyled>
        <FlexWrapper direction={'column'}  align={'center'} >
            <SectionTitle text={'Portfolio'}/>
            <PortfolioNavigation/>
        </FlexWrapper>

    </PortfolioStyled>
};


const PortfolioStyled=styled.div`
min-height: 500px;
width: 100%;
  background-color: coral;
`
export default Portfolio;

