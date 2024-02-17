import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../flexwrapper/FlexWrapper";
import frst from "../../../img/portfolioImages/portFolio_jot_ultra.webp"
import scnd from "../../../img/portfolioImages/portfolio_girl_in_aquas.jpg"
import thrd from "../../../img/portfolioImages/portfolio_cosmetics.webp"
import frth from "../../../img/portfolioImages/portfolio_box.webp"
import ffth from "../../../img/portfolioImages/portfolio_cosmetics_ordinary.webp"
import sxth from "../../../img/portfolioImages/portfolio_deers.webp"
import svnth from "../../../img/portfolioImages/portfolio_man_from_back.webp"
import eigth from "../../../img/portfolioImages/portfolio_book.webp"
import nnth from "../../../img/portfolioImages/portfolio_girli_white_t-shirt.webp"
import PortfolioImageCell from "../portfolioImageCell/portfolioImageCell";








const PortfolioImages = () => {

    let imagesArray = [frst, scnd, thrd, frth, ffth,sxth, svnth,eigth, nnth]


    return (
        <FlexWrapper direction={'row'} wrap={'wrap'} width={'1274px'} justify={'center'} gap={'40px'}>
            {imagesArray.map(img => <PortfolioImageCell src={img}/>)}
        </FlexWrapper>







    );
};

export default PortfolioImages;




