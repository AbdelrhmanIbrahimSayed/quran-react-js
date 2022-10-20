import React from 'react';
import { AppBar, BottomNavigation, Toolbar, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

function Footer(props) {
    return (
        <Box>
            <BottomNavigation>
                <Typography variant="h4" gutterBottom>
                    By Abdelrhman Ibrahim
                </Typography>

            </BottomNavigation>
        </Box>
    );
}

export default Footer;