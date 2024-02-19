import React from 'react';
import styled from "styled-components";

type SingleDescriptionPropsType = {
    description?: string,
    margin?: string
}
export const SingleDescription = (props: SingleDescriptionPropsType) => {
    return (

        <div>
            {props.description}
        </div>


    );
};






