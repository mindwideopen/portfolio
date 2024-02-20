import React from 'react';
import styled from "styled-components";
import {SingleDescription} from "../../assets/components/activity/singledescription/SingleDesription";
import SectionTitle from "../../assets/components/sectionTitle/SectionTitle";
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";

export const BrandsIveWorked = () => {
    return (
        <BrandsIveWorkedStyled >
            <FlexWrapper direction={'column'} align={'center'}>
                <SectionTitle text={"Brands I've Worked"}/>
                <SingleDescription description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}/>
            </FlexWrapper>
        </BrandsIveWorkedStyled>
    );
};

export default BrandsIveWorked;

const BrandsIveWorkedStyled = styled.section`
    height: 915px;
  
  background-color: darkgrey;
    
`
