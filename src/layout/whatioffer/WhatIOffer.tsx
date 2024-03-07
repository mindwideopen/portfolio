import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";
import SectionTitle from "../../assets/components/sectionTitle/SectionTitle";
import {SingleDescription} from "../../assets/components/activity/singledescription/SingleDesription";
import Activity from "../../assets/components/activity/Activity";
import {SwitchStyled} from "../../assets/components/switch/Switch";



const WhatIOffer = () => {
    return (
        <WhatIOfferStyled>
            <FlexWrapper direction={'column'} justify={'center'} align={'center'} textAlign={'center'}  >

                <SectionTitle text={'What I Offer'}/>
                <SingleDescription description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}/>
                <FlexWrapper  justify={'center'} wrap={'wrap'} gap={'28px'} >
                    <Activity brand={'youtube'} activity={'Sales'} description={'Продаст любой айфон'}/>
                    <Activity brand={'youtube'} activity={'Sales'} description={'Продаст любой айфон'}/>
                    <Activity brand={'youtube'} activity={'Sales'} description={'Продаст любой айфон'}/>


                </FlexWrapper>
                <Pagination>
                    <span></span>
                    <span></span>
                    <span></span>
                </Pagination>
            </FlexWrapper>
        </WhatIOfferStyled>
    );
};

const WhatIOfferStyled = styled.main`
  background-color: burlywood;
  padding-top: 130px;
  padding-bottom: 150px;
  

`

export default WhatIOffer
;

const Pagination = styled.span`
    
    span {display: inline-block;
  width: 20px;
  height: 20px;
  margin: 60px 8px 0 8px;
  background-color: red}
`