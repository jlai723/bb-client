import React, { useState, useEffect } from 'react'
// import {
//     Button
// } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CharacterTable from './CharacterTable'
import CharacterEdit from './CharacterEdit'
import CharacterCreate from './CharacterCreate'
import CharacterCard from './Card'
import CharacterDisplay from './CharacterDisplay';
import APIURL from '../../helpers/environment';
import {Button} from 'reactstrap'

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
        fetch(`${APIURL}/character/`, {
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
            <Button color="danger" variant="contained" onClick={changeView}>
                {toggleBtnMsg}
            </Button>
            <br />
            {view === true
                ?
    
                 <CharacterCard character={character} editUpdateCharacter={editUpdateCharacter} updateOn={updateOn} fetchCharacters={fetchCharacters} token={props.token}/>
                
                
                :
                <CharacterTable character={character} editUpdateCharacter={editUpdateCharacter} updateOn={updateOn} fetchCharacters={fetchCharacters} token={props.token} />
            }

            {updateActive ? <CharacterEdit characterToUpdate={characterToUpdate} updateOff={updateOff} token={props.token} fetchCharacters={fetchCharacters} /> : <></>}
            <div id="bottomSpacer"></div>

        </>
    )
}

export default CharacterIndex