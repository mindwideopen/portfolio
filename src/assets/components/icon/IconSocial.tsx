import React from 'react';
import SpriteIconSocial from '../../img/svg/socialIcons/SpriteSocialIcons.svg'




type IconSocialPropsType = {
    iconId: string,


}
const IconSocial = (props: IconSocialPropsType) => {
    return (
        <svg
            viewBox="0 0 24 24" width="24px" height="24px"  xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${SpriteIconSocial}#${props.iconId}`}/>

        </svg>
    );
};

export default IconSocial;