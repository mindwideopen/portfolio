import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";
import emma from '../../assets/img/portfolioImages/Emma_Brown.webp'

import {SingleDescription} from "../../assets/components/activity/singledescription/SingleDesription";


export const Testimonials = () => {
    return (

            <TestimonialsStyled>
                <FlexWrapper  alignContent={'space-between'}>
                    <ImageStyled src={emma}/>
                    <div>
                        <SingleDescription description={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl posuere aliquet amet pharetra malesuada. Suspendisse nisl ac at tortor. Sit faucibus placerat at nisl posuere aliquet amet pharetra suspendisse risus.”"}

                                            />



                        <SingleDescription description={'Emma Brown'} margin={'10px'}/>

                        <SingleDescription description={'CEO - Squirrel Sweets'} margin={'10px'}/>


                    </div>






                </FlexWrapper>
            </TestimonialsStyled>



    );
};

export default Testimonials;


type TestimonialsStyledPropsType = {
    image?: string,
    name?: string,
    position?: string

}
const TestimonialsStyled = styled.section<TestimonialsStyledPropsType>`

  height: 359px;
  

`

const ImageStyled = styled.img`
  box-sizing: content-box;
    width: 589px;
  height: 359px;
  object-fit: cover;
  border-radius: 180px;
  outline:20px solid  rgb(251,168,32, 0.1)  ;

`