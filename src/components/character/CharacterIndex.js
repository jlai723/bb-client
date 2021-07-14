import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import CharacterTable from './CharacterTable'
import CharacterEdit from './CharacterEdit'
import CharacterCreate from './CharacterCreate'

const CharacterIndex = (props) => {
    const [character, setCharacter] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [characterToUpdate, setCharacterToUpdate] = useState([])

    const fetchCharacters = () => {
        fetch('http://localhost:3000/character', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then( (res) => res.json())
        .then((logData) => {
            setCharacter(logData)
            console.log(character);
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

    return(
        <div>
            <CharacterCreate fetchCharacters={fetchCharacters} token={props.token} />
            <CharacterTable character={character} editUpdateCharacter={editUpdateCharacter} updateOn={updateOn} fetchCharacters={fetchCharacters} token={props.token}/>
            {updateActive ? <CharacterEdit characterToUpdate={characterToUpdate} updateOff={updateOff} token={props.token} fetchCharacters={fetchCharacters}/> : <></>}
    </div>
    )
}

export default CharacterIndex