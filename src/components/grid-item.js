import React from "react";
import styled from "styled-components";

const StyledGridItem = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    & > * {
        flex: 1 1 auto;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
    }
    @media (max-width: 768px) {
        grid-column: span 12;
    }
    @media (min-width: 769px) {
        grid-column: span ${props => props.col};
    }
`;


const GridItem = ({ col, children }) => {
    return (
        <StyledGridItem col={ col }>
            { children }
        </StyledGridItem>
  )
}
export default GridItem;