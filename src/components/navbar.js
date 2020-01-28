import React from "react";
import { Link } from 'gatsby';
import styled from "styled-components";

import { STYLE } from './../consts';

const StyledNav = styled.nav`
`;
const Ul = styled.nav`
    list-style-type: none;
    display: flex;
`;
const A = styled.a`
    display: block;
    padding: ${STYLE.GAP_2};
    color: inherit;
    font-size: ${STYLE.NAV_SIZE};
    border-right: 1px dotted;
`;


const NavBar = ({ siteTitle }) => (
    <StyledNav>
        <Ul>
            <li><A as={ Link } to="/">Home</A></li>
            <li><A as={ Link } to="/about">About</A></li>
            <li><A as={ Link } to="/contacts">Contacts</A></li>
        </Ul>
    </StyledNav>
);
export default NavBar;