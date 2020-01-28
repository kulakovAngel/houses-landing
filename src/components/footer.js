import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background: #242943;
    display: flex;
`;
const Section = styled.section`
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
`;


const Footer = () => (
    <StyledFooter>
        <Section>
            <h6>© {new Date().getFullYear()}, CoolSoft</h6>
            Hrodno, Belarus<br />
            +375 29 2970770<br />
            kulakov.angel@gmail.com
        </Section>
        <Section>
            <h6>© Houses for sale</h6>
            Hrodno, Belarus<br />
            +375 25 7300310<br />
        </Section>
    </StyledFooter>
);
export default Footer;