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
             width="78" height="78" viewBox="-0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`}/>

        </svg>
    );
};

export default IconSkill;