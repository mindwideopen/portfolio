import React from 'react';


type SectionTitlePropsType = {
    text: string
}

export  const SectionTitle = (props: SectionTitlePropsType) => {
    return (

        <p>{props.text}</p>
    );
};

export default SectionTitle;