import React from "react";
import Fade from 'react-reveal/Fade';
import styled from "styled-components";
import Layout from "./../components/layout";
import Grid from "./../components/grid";
import GridItem from "./../components/grid-item";
import Tile from "./../components/tile";

import house1 from './../images/house-1.jpg';
import house2 from './../images/house-2.jpg';
import house3 from './../images/house-3.jpg';
import house4 from './../images/house-4.jpg';

const items = [{
    img: house1,
    color: '#6fc3df',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at dui sem. Aliquam sagittis dui vel ex imperdiet, eget tristique sapien venenatis.',
    cols: 4,
},{
    img: house2,
    color: '#8d82c4',
    title: 'Nunc non',
    text: 'Nunc non auctor augue, ac tempor risus. Proin quam orci, egestas luctus lacinia non, fermentum ut est. Aenean vel vehicula tortor, id fermentum nibh. Fusce elementum et sapien at viverra.',
    cols: 8,
},{
    img: house3,
    color: '#ec8d81',
    title: 'Pellentesque auctor',
    text: 'Pellentesque auctor laoreet eros, sit amet efficitur arcu convallis sit amet.',
    cols: 8,
},{
    img: house4,
    color: '#e7b788',
    title: 'Etiam vitae',
    text: 'Etiam vitae convallis turpis, non euismod orci. Suspendisse condimentum mattis neque bibendum interdum.',
    cols: 4,
},{
    img: house2,
    color: '#8ea9e8',
    title: 'Donec blandit',
    text: 'Donec blandit elit nulla, sit amet iaculis lectus fringilla vel.',
    cols: 4,
},{
    img: house1,
    color: '#87c5a4',
    title: 'Vivamus quis',
    text: 'Vivamus quis nisl finibus, vestibulum arcu ut, placerat nisi. Aenean euismod euismod egestas. Aenean elementum mollis tincidunt. Nulla facilisi.',
    cols: 8,
}]
const H2 = styled.h2`
position: relative;
&:after {
content: '';
display: block;
width: 60%;
border-bottom: 8px solid;
}
`;
const P = styled.p`
position: relative;
`;
const StyledTile = styled.div`
background: url(${props => props.img});
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
padding: 150px 10px;
transition: 0.3s;
position: relative;
flex: 1 1 auto;
&:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${props => props.color}dd;
    transition: 0.3s;
}
&:hover:before {
    background: ${props => props.color}00;
}
& > * {
    color: #202742;
}
&:hover > * {
    background: ${props => props.color}dd;
    box-shadow: 0px 0px 6px 6px ${props => props.color}dd;
}
`;
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
const IndexPage = () => {
    const t = true ? 'left' : 'right'
    return (
        <Layout seo={{
            title: 'Home Page',
            description: 'Houses for sale',
            keywords: 'Houses, sale, Hrodno',
        }}>
            <Grid>
                {
                    items.map((item, i) => (
                        <GridItem col={ item.cols } key={ item.title }>
                            <Fade { ...(i%2 ? {right: 'true'} : {left: 'true'}) }>
                                <Tile
                                   img={ item.img }
                                   color={ item.color }
                                   title={ item.title }
                                   text={ item.text } />
                            </Fade>
                        </GridItem>
                    ))
                }
            </Grid>
        </Layout>
    )
};
export default IndexPage;