import React from 'react';
import FlexWrapper from "../../flexwrapper/FlexWrapper";
import first from "../../../img/portfolioImages/portFolio_jot_ultra.webp"
import second from "../../../img/portfolioImages/portfolio_girl_in_aquas.jpg"
import third from "../../../img/portfolioImages/portfolio_cosmetics.webp"
import fourth from "../../../img/portfolioImages/portfolio_box.webp"
import fifth from "../../../img/portfolioImages/portfolio_cosmetics_ordinary.webp"
import sixth from "../../../img/portfolioImages/portfolio_deers.webp"
import seventh from "../../../img/portfolioImages/portfolio_man_from_back.webp"
import eighth from "../../../img/portfolioImages/portfolio_book.webp"
import ninth from "../../../img/portfolioImages/portfolio_girli_white_t-shirt.webp"
import PortfolioImageCell from "../portfolioImageCell/portfolioImageCell";



const PortfolioImages = () => {

    let imagesArray = [first, second, third, fourth, fifth,sixth, seventh,eighth, ninth]

    return (
        <FlexWrapper  wrap={'wrap'} width={'1276px'} gap={'20px'} justify={'space-between'}  >

            {imagesArray.map(img =>  <PortfolioImageCell src={img}/>)}

        </FlexWrapper>
    );
};

export default PortfolioImages;




