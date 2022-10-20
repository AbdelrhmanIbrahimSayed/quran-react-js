import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    let navigate = useNavigate();
    const handleClick=()=>{
        let path = `/`;
       
       navigate(path);
    }
    return (
        <AppBar>
            <Toolbar>
                <IconButton onClick={()=> handleClick()} >
                    <img src=" https://play-lh.googleusercontent.com/8s6h3OW1xSEghokWabjAvT4zuYjsJG5vi30SGhZLpgLfqsvIqXzPSy-5lECyfcUOi58"
                        style={{ width: "40px" }} />

                </IconButton>

                <Typography variant="h4" gutterBottom>
                    Quran
                </Typography>
            </Toolbar>

        </AppBar>
    );
}

export default Header;