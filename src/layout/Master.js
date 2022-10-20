import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';

function Master(props) {
    return (
        <>
            <Box bgcolor={'white'} sx={{ margin: "10px" ,backgroundImage: "https://as1.ftcdn.net/v2/jpg/03/35/71/82/1000_F_335718218_t9Ykooq0PNbZCzL8yLvaayjIMIOHOsY8.jpg"}}  >
                <Grid container>
                    <Grid item xs={12}>
                        <Header />

                    </Grid>
                    <Grid item xs={12}>
                        {props.children}
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Footer />
                    </Grid> */}

                </Grid>
            </Box>


        </>
    );
}

export default Master;