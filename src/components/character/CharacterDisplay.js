import { React, useEffect, useState } from 'react'
import { Card, CardImg, Row, Col } from 'reactstrap'

const CharacterDisplay = (props) => {
    const [isLoaded, setIsLoaded] = useState()
    const [image, setImage] = useState()

    const CharacterDisplayCurrent = () => {
        let charLength = props.character.length
        if (charLength != 0) {
            return (
                <div>
                    <p>{props.character[charLength - 1].name} is a {props.character[charLength - 1].gender}, {props.character[charLength - 1].age} {props.character[charLength - 1].race}.</p>
                    <p>{props.character[charLength - 1].name} is located in {props.character[charLength - 1].location}, and their alignment is {props.character[charLength - 1].alignment}.</p>
                    <p>{props.character[charLength - 1].name} is a {props.character[charLength - 1].profession} and is {props.character[charLength - 1].trait}.</p>
                    {/* <ul>
                        <li>{props.character[charLength - 1].name}</li>
                        <li>{props.character[charLength - 1].location}</li>
                        <li>{props.character[charLength - 1].race}</li>
                        <li>{props.character[charLength - 1].gender}</li>
                        <li>{props.character[charLength - 1].age}</li>
                        <li>{props.character[charLength - 1].alignment}</li>
                        <li>{props.character[charLength - 1].profession}</li>
                        <li>{props.character[charLength - 1].trait}</li>
                    </ul> */}
                </div>
            )
        }
    }

    const CharacterDisplayImage = () => {
        let charLength = props.character.length
        if (charLength != 0) {
            setIsLoaded(true)

            let imgGender = props.character[charLength - 1].gender
            let imgRace = props.character[charLength - 1].race
            console.log(imgGender)
            console.log(imgRace)

            const resources = {
                Female_Dragonborn: 'Dragonborn.png',
                Female_Dwarf: 'Female_Dwarf.png',
                Female_Elf: 'Female_Elf.png',
                Female_Gnome: 'Female_Gnome.png',
                Female_HalfElf: 'Female_HalfElf.png',
                Female_Halfling: 'Female_Halfling.png',
                Female_HalfOrc: 'Female_HalfOrc.png',
                Female_Human: 'Female_Human.png',
                Female_Tiefling: 'Female_Tiefling.png',
                Male_Dragonborn: 'Dragonborn.png',
                Male_Dwarf: 'Male_Dwarf.png',
                Male_Elf: 'Male_Elf.jpg',
                Male_Gnome: 'Male_Gnome.png',
                Male_HalfElf: 'Male_HalfElf.png',
                Male_Halfling: 'Male_Halfling.png',
                Male_HalfOrc: 'Male_HalfOrc.jpg',
                Male_Human: 'Male_Human.png',
                Male_Tiefling: 'Male_Tiefling.jpg',
                Default: 'Logo.png'
            }

            if (imgGender && imgRace) {
                let imgLookup = resources[`${imgGender}_${imgRace}`]
                let imgSrc = imgLookup ? imgLookup : resources.Default
                setImage("./assets/" + imgSrc)
            }

        }
    }

    // added characterDisplayImage & characterDisplayCurrent to useEffect so it runs on component mount.
    // added characterDisplayImage to [] so it runs again on update.
    useEffect(() => {
        CharacterDisplayImage()
        CharacterDisplayCurrent()
    }, [CharacterDisplayImage])


    return (
        <Card id="display">
            {CharacterDisplayCurrent()}
            {isLoaded ? <img src={image} id="image" /> : ""}
            {/* {CharacterDisplayImage()} */}
            {/* <img src={image} /> */}
        </Card>
    )

}

export default CharacterDisplay




// switch (imgGender || imgRace) {
            //     case gender.female && race.A:
            //         setImage(Dragonborn)
            //         console.log(image)
            //         break;
            //     default: 
            //     setImage(Dragonborn)
            // }



// let gender = { female: 'female', male: 'male', nonbinary: 'nonbinary' }

        // let race = { A: 'dragonborn', B: 'dwarf', C: 'elf', D: 'gnome', E: 'half-elf', F: 'halfling', G: 'half-orc', H: 'human', I: 'tiefling' }







// import React, { useState, useEffect } from 'react';

// function character() {
//     let  name = document.getElementById('name').value;
//     let race = document.getElementById('race').value;
//     let gender = document.getElementById('gender').value;
//     let age = document.getElementById('age').value;
//     let alignment = document.getElementById('alignment').value;
//     let profession = document.getElementById('profession').value;
//     let trait = document.getElementById('trait').value;
//     //let owner = document.getElementById('owner').value;

//     let newCharacter = {
//         character: {
//             name: name,
//             race: race,
//             gender: gender,
//             age: age,
//             alignment: alignment,
//             profession: profession,
//             trait: trait,
//             //owner: owner
//         }
//     }

//     fetch(`http://localhost:5432/create`, {
//         method: 'POST',
//         headers: newHeaders({
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${accessToken}`
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             displayMine()
//         })
//         .catch(err => {
//             console.error(err)
//         })
//     })
// }

// export default Character;