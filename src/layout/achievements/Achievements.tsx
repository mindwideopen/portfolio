import React from 'react';
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";
import styled from "styled-components";

export const Achievements = () => {
    return (
        <FlexWrapper >
            <Achievement name={'Projects Completed'} rate={'700'}></Achievement>
            <Achievement name={'Projects Completed'} rate={'700'}></Achievement>
            <Achievement name={'Projects Completed'} rate={'700'}></Achievement>
            <Achievement name={'Projects Completed'} rate={'700'}></Achievement>
        </FlexWrapper>
    );
};


export default Achievements;


type AchievementPropsType = {
    name: string,
    rate: string

}
const Achievement = (props: AchievementPropsType) => {

    return (
        <AchievementStyled>
            <div>{props.rate}</div>
            <div>{props.name}</div>
        </AchievementStyled>
    )
}

  const AchievementStyled = styled.div`
      
      
  `

