import React from 'react';
import IconsSprite from '../../img/svg/fb-icon.svg'



type IconSocialPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string

}
const IconSkill = (props: IconSocialPropsType) => {
    return (
        <svg
             width="30" height="55" viewBox="15 15 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`}/>

        </svg>
    );
};

export default IconSkill;