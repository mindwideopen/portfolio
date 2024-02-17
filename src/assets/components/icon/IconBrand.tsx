import React from 'react';
import SpriteBrandIcons from '../../img/svg/brands/sprite-brands.svg'



type IconBrandPropsType = {
    iconId: string


}
const IconBrand = (props: IconBrandPropsType) => {
    debugger
    return (
        <svg
            width="60" height="77" viewBox="0 0 60 77" fill="black" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${SpriteBrandIcons}#${props.iconId}`}/>

        </svg>
    );
};

export default IconBrand;