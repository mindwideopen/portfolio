import React from 'react';
import FlexWrapper from "../flexwrapper/FlexWrapper";
import Icon from "../icon/IconBrand";
import {SingleDescriptionStyled} from "../singledescription/SingleDesription";
import styled from "styled-components";
import IconBrand from "../icon/IconBrand";
import IconSocial from "../icon/IconSocial";


type ActivityPropsType = {
    brand: string,
    activity: string,
    description: string
    }

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

export const Activity = (props: ActivityPropsType) => {

    return (
        <ActivityStyled>

                <IconSocial iconId={props.brand}/>
                <ActivityType activity={props.activity}/>
                <SingleDescriptionStyled>{props.description}</SingleDescriptionStyled>

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



export default Activity;