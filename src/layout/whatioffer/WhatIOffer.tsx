import React from 'react';
import styled from "styled-components";
import Intro from "../../assets/components/greeting/Greeting";
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";
import SectionTitle from "../../assets/components/sectionTitle/SectionTitle";
import {SingleDescription} from "../../assets/components/singledescription/SingleDesription";
import Activity from "../../assets/components/activity/Activity";
import {SwitchStyled} from "../../assets/components/switch/Switch";



const WhatIOffer = () => {
    return (
        <WhatIOfferStyled>
            <FlexWrapper direction={'column'} justify={'center'} align={'center'} textAlign={'center'}  >
                <SectionTitle text={'What I Offer'}/>
                <SingleDescription description={'Things that I can do for my clients. ' +
                    'Just make your good trust I love to provide quality works.'}/>
                <FlexWrapper  justify={'center'} wrap={'wrap'} gap={'28px'} >
                    <Activity/>
                    <Activity/>
                    <Activity/>
                </FlexWrapper>
                <FlexWrapper align={'center'} justify={'center'}>
                    <SwitchStyled selected />
                    <SwitchStyled />
                    <SwitchStyled />
                </FlexWrapper>
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