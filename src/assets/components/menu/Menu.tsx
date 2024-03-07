import React from 'react';
import styled from "styled-components";



export const Menu = (props:{menuItems:Array<string>}) => {
    return (
        <MenuStyled>
            <ul>
                {props.menuItems.map((item, index) =>{
                   return   <li key={index}>
                                <a href="">{item}</a>
                           </li>
                })}
            </ul>
        </MenuStyled>
    );
};
const MenuStyled=styled.nav`
  ul {
    display: flex;
    gap: 20px
  }

`
export default Menu;