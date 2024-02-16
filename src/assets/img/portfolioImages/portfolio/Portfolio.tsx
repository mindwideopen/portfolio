import React from 'react';
import styled from "styled-components";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import PortfolioNavigation from "../../../components/portfolioComponents/portfolioNavigation/PortfolioNavigation";
import FlexWrapper from "../../../components/flexwrapper/FlexWrapper";
import PortfolioImages from "../../../components/portfolioComponents/portfolioImages/PottfolioImages";

const Portfolio = () => {
    return <PortfolioStyled>
        <FlexWrapper direction={'column'}  align={'center'} >
            <SectionTitle text={'Portfolio'}/>
            <PortfolioNavigation/>
            <PortfolioImages/>
        </FlexWrapper>

    </PortfolioStyled>
};


const PortfolioStyled=styled.div`
min-height: 500px;
width: 100%;
  background-color: coral;
`
export default Portfolio;

