import React from "react";
import Fade from 'react-reveal/Fade';

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

const IndexPage = () => {
    return (
         <Layout>
            <Grid>
                {
                    items.map(item => (
                        <GridItem col={ item.cols }>
                            <Fade top>
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