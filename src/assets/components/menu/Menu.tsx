import React from 'react';
import styled from "styled-components";

const Menu = () => {
    return (
        <MenuStyled>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Srevices</a>
                </li>
                <li>
                    <a href="">Portfolio</a>
                </li>
                <li>
                    <a href="">Store</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
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