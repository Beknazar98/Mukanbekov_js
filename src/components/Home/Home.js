import { Grid } from '@material-ui/core';
import React from 'react';

import Content from './Content';
import Sidebar from './Sidebar';

const Home = () => {
    return (

            <Grid >
                
                <Content/>
                <Sidebar />
                
            </Grid>
     
    );
};

export default Home;