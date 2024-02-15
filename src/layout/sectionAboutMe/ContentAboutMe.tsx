import React from 'react';
import SectionTitle from "../../assets/components/sectionTitle/SectionTitle";
import Description from "../../assets/components/description/description";
import {Button} from "./Button/Button";
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";



const ContentAboutMe = () => {
    return (
       <FlexWrapper  direction={'column'} wrap={'wrap'} >
           <SectionTitle text={'About Me'}/>
           <Description/>
           <FlexWrapper>
               <Button action={'HIRE ME'} color={'#F5F5F5'} backgroundColor={'#3F3F3F'} />
               <Button action={'DOWNLOAD CV'} color={'#3F3F3F'} backgroundColor={'#FFF'} border={'1px solid rgba(0, 0, 0, 0.22)'} />
           </FlexWrapper>

       </FlexWrapper>
    );
};

export default ContentAboutMe;