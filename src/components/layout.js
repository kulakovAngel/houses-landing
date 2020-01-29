import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Helmet from 'react-helmet';

import { STYLE } from './../consts';
import Feedback from "./feedback";
import Header from "./header";
import Footer from "./footer";

const GlobalStyle = createGlobalStyle`
@import url(${STYLE.FONT_URL});
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
html,
body,
#___gatsby,
#___gatsby > div {
    height: 100%;
    font-size: 24px;
    background: #353c54;
    color: ${STYLE.COLOR_1};
}
#___gatsby > div {
    display: flex;
    flex-direction: column;
}
h1 { font-size: 72px; letter-spacing: 4px; margin: 48px 0; }
h2 { font-size: 48px; letter-spacing: 2px; margin: 36px 0; }
h3 { font-size: 36px; }
h4, input { font-size: 28px; }
h5 { font-size: 26px; }
h6 { font-size: 24px; }
p { line-height: 1.6rem; font-weight: 100; }
`;
const Main = styled.main`flex: 1 1 auto;`;


const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>Houses for sale</title>
                <meta name='description' content='Houses for sale' />
                <meta name='keywords' content='Houses, Hrodno' />
            </Helmet>
            <GlobalStyle />
            <Header />
            <Main>{ children }</Main>
            <Feedback />
            <Footer />
        </>
  )
}
export default Layout;

//<GlobalStyle theme="purple" />
//body {
//    color: ${props => (props.theme === "purple" ? "purple" : "black")};
//}