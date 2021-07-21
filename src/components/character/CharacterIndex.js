import React, { useState, useEffect } from 'react'
import {
    Grid,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CharacterTable from './CharacterTable'
import CharacterEdit from './CharacterEdit'
import CharacterCreate from './CharacterCreate'
import CharacterCard from './Card'
import CharacterDisplay from './CharacterDisplay';

const CharacterIndex = (props) => {
    const useStyles = makeStyles({
        gridContainer: {
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '20px'
        }
    });

    const classes = useStyles();

    const [character, setCharacter] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [characterToUpdate, setCharacterToUpdate] = useState([])
    const [view, setView] = useState(true)
    const [toggleBtnMsg, setToggleBtnMsg] = useState('Switch to Table View')

    const fetchCharacters = () => {
        fetch('http://localhost:3000/character/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((charData) => {
                setCharacter(charData)
                console.log(charData);
            })
    }

    const editUpdateCharacter = (character) => {
        setCharacterToUpdate(character)
        console.log(character);
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

    const changeView = () => { 
        setView(!view);
        if (view === false) {
            setToggleBtnMsg('Switch to Table View')
        } else {
            setToggleBtnMsg('Switch to Card View')
        }
    }

    return (
        <>
            <div id="container">
                <CharacterCreate fetchCharacters={fetchCharacters} token={props.token} />

                <CharacterDisplay character={character} />
            </div>
            <Button variant="contained" onClick={changeView}>
                {toggleBtnMsg}
            </Button>
            {view === true
                ?
                <Grid container spacing={4} className={classes.gridContainer} >
                    <Grid item xs={12} sm={6} md={4}>
                        <CharacterCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CharacterCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CharacterCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CharacterCard />
                    </Grid>
                </Grid>
                :
                <CharacterTable character={character} editUpdateCharacter={editUpdateCharacter} updateOn={updateOn} fetchCharacters={fetchCharacters} token={props.token} />
            }

            {updateActive ? <CharacterEdit characterToUpdate={characterToUpdate} updateOff={updateOff} token={props.token} fetchCharacters={fetchCharacters} /> : <></>}

        </>
    )
}

export default CharacterIndex