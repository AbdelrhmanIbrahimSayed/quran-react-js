import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SurahName(props) {
    const [data, setData] = useState([]);
    // const [aya, setAyah] = useState({});
    const audio=new Audio();
    let navigate = useNavigate();
//     const handleClick=(e,id)=>{
//         fetch(`http://api.alquran.cloud/v1/surah/${id}`).then((response) =>
//         response.json()).then(function (res) {
// debugger;
//      setAyah(res.data);
//             console.log(data)
//         })

//     }
    const handleClick=(id)=>{
        let path = `${id}`;
       
       navigate(path);
    }
//     const handleAudio=(e,id)=>{
//        const mp3=`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${id}.mp3`;
//        //audio.pause
//        audio.src=mp3
//        audio.play();
// console.log(mp3)
//         };
    useEffect(() => {
        fetch(`http://api.alquran.cloud/v1/surah`).then((response) =>
            response.json()).then(function (res) {
debugger;   
                setData(res.data);
                console.log(data)
            })

    }, []);
    return (
        <>
          <Box bgcolor={'white'} backgroundImage={'https://as1.ftcdn.net/v2/jpg/03/35/71/82/1000_F_335718218_t9Ykooq0PNbZCzL8yLvaayjIMIOHOsY8.jpg'} sx={{ margin: "60px" }} >
            <Grid container>
            {data.map((item,index) => {
                return(
                <Grid item xs={3} key={index}>
                    <Button variant="outlined" sx={{ margin: "10px" }} fullWidth onClick={()=> handleClick(item.number)}>
                     {item.name}  {item.number}
                    </Button>
                </Grid>
                )
            })}
            </Grid>

          </Box>
             {/* <Box bgcolor={'white'} sx={{ margin: "10px" }} >
            <Grid container>
            {(aya.ayahs) && aya.ayahs.map((item,index) => {
                return(
                <Grid item xs={12} key={index}>
                  
                      {item.text} ({item.numberInSurah}) <Button onClick={(e)=>{ handleAudio(e,item.number) }}>
                        play
                      </Button>
                    
                </Grid>
                )
            })}
            </Grid>

          </Box> */}
        </>
    );
}

export default SurahName;