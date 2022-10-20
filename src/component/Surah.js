import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Surah(props) {
    const { id } = useParams();
    const audio = new Audio();
    let navigate = useNavigate();
    const [aya, setAyah] = useState({});

    const handleAudio = (id) => {
        const mp3 = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${id}.mp3`;
        //audio.pause
        audio.src = mp3
        audio.play();

        debugger;

        console.log(mp3)
    };
    const handleBackButton = () => {
        let index = { id }
        let back = parseInt(index.id, 10);
        if (back > 1) {
            let i = back - 1;
            let path = `/${i}`;

            navigate(path);

        } else {
            alert("Can't go back");
        }

    };
    const handleNextButton = () => {
        let index = { id }
        let next = parseInt(index.id, 10);
        if (next < 114) {
            let i = next + 1;
            debugger;
            let path = `/${i}`;

            navigate(path);

        } else {
            debugger;

            alert("Can't go next");
        }
    };
    const handleClick = () => {
        let path = `/`;

        navigate(path);
    }


    useEffect(() => {
        fetch(`http://api.alquran.cloud/v1/surah/${id}`).then((response) =>
            response.json()).then(function (res) {

                setAyah(res.data);

            })

    });
    const ref = useRef();
    const [playlist, setPlayList] = useState([]);
    const [TrackIndex, setNextTrackIndex] = useState(0);
    const handleAudioClick = (id, number) => {
        let list = [];
        for (let i = 0; i < number; i++) {
            const mp3 = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${id}.mp3`;
            list.push(mp3);
            // handleAllAudio(id)
            debugger;
            id = id + 1

        }

        setPlayList(list);
        setNextTrackIndex(0);
        ref.current.src = list[0];
        ref.current.play();

    };
    const onEnded = (e) => {
        debugger;
        setNextTrackIndex(TrackIndex + 1);
        ref.current.src = playlist[TrackIndex + 1];
        ref.current.play();
    }

    return (
        <>

            <Box bgcolor={'white'} backgroundImage={'https://as1.ftcdn.net/v2/jpg/03/35/71/82/1000_F_335718218_t9Ykooq0PNbZCzL8yLvaayjIMIOHOsY8.jpg'} sx={{ margin: "60px", backgroundImage: "https://as1.ftcdn.net/v2/jpg/03/35/71/82/1000_F_335718218_t9Ykooq0PNbZCzL8yLvaayjIMIOHOsY8.jpg" }} >
                <Grid container>
                    <Grid item xs={11}>
                        <Button onClick={() => { handleAudioClick(aya.ayahs[0].number, aya.numberOfAyahs) }}>
                            Play All
                            <audio ref={ref} onEnded={onEnded} controls >
                                <source src={playlist[TrackIndex]} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Stack justifyContent="flex-end">
                            <Button variant="contained" onClick={() => handleClick()} >الرجوع للسور</Button>
                        </Stack>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Stack justifyContent="center"
                        alignItems="center" sx={{ margin: '10px' }}>
                        ｟ {aya.name} ｠</Stack>
                </Grid>
                <Grid container sx={{ borderRadius: 1 }}>
                    {(aya.ayahs) && aya.ayahs.map((item, index) => {
                        return (
                            <Grid item xs={12} key={index} textAlign={'center'} sx={{ backgroundColor: '#e0e0e0' }}>


                                <Typography variant='h6' gutterBottom sx={{ marginRight: '10px' }}>
                                    <Button onClick={(e) => { handleAudio(item.number) }}>
                                        <PlayCircleIcon />
                                    </Button>
                                    {item.text} ({item.numberInSurah})
                                </Typography>
                            </Grid>
                        )
                    })}

                    <Grid item xs={1} sx={{ marginTop: '10px' }}>
                        <Button variant="contained" onClick={() => handleBackButton()} startIcon={<ArrowBackIcon />}>السابق</Button>
                    </Grid>
                    <Grid item xs={10}>

                    </Grid>
                    <Grid item xs={1} sx={{ marginTop: '10px' }}>
                        <Button variant="contained" onClick={() => handleNextButton()} endIcon={<ArrowForwardIcon />}>التالي</Button>
                    </Grid>
                </Grid>

            </Box>

        </>
    );
}

export default Surah;