import React from "react";
import styled from "styled-components";

import { STYLE } from './../consts';
import Blob from "./Blob";
import NavBar from "./NavBar";


import house from '../images/house.jpg';

const StyledHeader = styled.header`
    background: linear-gradient(45deg, rgba(32,39,66,0.9), rgba(32,39,66,0.5)), url('${house}');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 200px;
`;
const H1 = styled.h1`text-align: center;`;
const P = styled.p`
text-align: right;
margin: 128px 128px 0 40%;
`;


const Header = () => (
    <StyledHeader>
        <Blob
            size={ 350 }
            top='50%'
            left='20%'
            color1={ STYLE.BACKGROUND_1+'44' }
            color2={ STYLE.BACKGROUND_2+'bb' }
            />
        <Blob
            size={ 300 }
            top='20%'
            left='70%'
            color1={ STYLE.BACKGROUND_1+'66' }
            color2={ STYLE.BACKGROUND_2+'33' }
            />
        <Blob
            size={ 250 }
            top='85%'
            left='80%'
            color1={ STYLE.BACKGROUND_1+'aa' }
            color2={ STYLE.BACKGROUND_2+'44' }
            />
        <H1>
            Houses for sale
        </H1>
        <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at dui sem. Aliquam sagittis dui vel ex imperdiet, eget tristique sapien venenatis. Nunc non auctor augue, ac tempor risus. Proin quam orci, egestas luctus lacinia non, fermentum ut est. Aenean vel vehicula tortor, id fermentum nibh. Fusce elementum et sapien at viverra.
        </P>
        <NavBar />
    </StyledHeader>
);
export default Header;