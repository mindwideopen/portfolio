import React from 'react';
import FlexWrapper from "../flexwrapper/FlexWrapper";
import Icon from "../icon/IconSkill";
import {SingleDescription} from "../singledescription/SingleDesription";
import styled from "styled-components";


export const Activity = () => {
    return (
        <ActivityStyled>

                <Icon iconId={'sbr'}/>
                <ActivityType activity={'Branding Design'}/>
                <SingleDescription description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.'}/>

        </ActivityStyled>

    );
};


const ActivityStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
background-color: #FDFDFD;
  border: 1px solid #EBEBEB;
  box-shadow: 0 2px 40px 0 rgba(187, 187, 187, 0.25);
  height: 392px;
  
`


type ActivityTypePropsType = {
    activity: string
}
const ActivityType = (props: ActivityTypePropsType) => {
    return(
        <div>
            {props.activity}
        </div>
    )
}
export default Activity;