import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap'

const CharacterEdit = (props) => {
    const [editName, setEditName] = useState(props.characterToUpdate.name)
    const [editLocation, setEditLocation] = useState(props.characterToUpdate.location)
    const [editRace, setEditRace] = useState(props.characterToUpdate.race)
    const [editGender, setEditGender] = useState(props.characterToUpdate.gender)
    const [editAge, setEditAge] = useState(props.characterToUpdate.age)
    const [editAlignment, setEditAlignment] = useState(props.characterToUpdate.alignment)
    const [editProfession, setEditProfession] = useState(props.characterToUpdate.profession)
    const [editTrait, setEditTrait] = useState(props.characterToUpdate.trait)
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const CharacterUpdate = (event, character) => {
        event.preventDefault()
        fetch(`http://localhost:3000/character/${props.characterToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                character: {
                    name: editName,
                    location: editLocation,
                    race: editRace,
                    gender: editGender,
                    age: editAge,
                    alignment: editAlignment,
                    profession: editProfession,
                    trait: editTrait
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => {
            props.fetchCharacters()
            props.updateOff()
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit a Character</ModalHeader>
            <ModalBody>
                <Form onSubmit={CharacterUpdate}>
                    <FormGroup>
                        <Label htmlFor="name">Edit Name:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="location">Edit Location:</Label>
                        <Input name="location" value={editLocation} onChange={(e) => setEditLocation(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="race">Edit Race:</Label>
                        <Input type="select" name="race" value={editRace} onChange={(e) => setEditRace(e.target.value)}>
                            <option></option>
                            <option value="Dragonborn">Dragonborn</option>
                            <option value="Dwarf">Dwarf</option>
                            <option value="Elf">Elf</option>
                            <option value="Gnome">Gnome</option>
                            <option value="HalfElf">Half-Elf</option>
                            <option value="Halfling">Halfling</option>
                            <option value="HalfOrc">Half-Orc</option>
                            <option value="Human">Human</option>
                            <option value="Tiefling">Tiefling</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="gender">Edit Gender:</Label>
                        <Input type="select" name="gender" value={editGender} onChange={(e) => setEditGender(e.target.value)}>
                            <option></option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Nonbinary">Nonbinary</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="age">Edit Age:</Label>
                        <Input type="select" name="age" value={editAge} onChange={(e) => setEditAge(e.target.value)}>
                            <option></option>
                            <option value="Child">Child</option>
                            <option value="Young Adult">Young Adult</option>
                            <option value="Adult">Adult</option>
                            <option value="Elder">Elder</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="alignment">Edit Alignment:</Label>
                        <Input type="select" name="alignment" value={editAlignment} onChange={(e) => setEditAlignment(e.target.value)}>
                            <option></option>
                            <option value="Lawful Good">Lawful Good</option>
                            <option value="Neutral Good">Neutral Good</option>
                            <option value="Chaotic Good">Chaotic Good</option>
                            <option value="Lawful Neutral">Lawful Neutral</option>
                            <option value="True Neutral">True Neutral</option>
                            <option value="Chaotic Neutral">Chaotic Neutral</option>
                            <option value="Lawful Evil">Lawful Evil</option>
                            <option value="Neutral Evil">Neutral Evil</option>
                            <option value="Chaotic Evil">Chaotic Evil</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="profession">Edit Profession:</Label>
                            <Input name="profession" placeholder="Profession" value={editProfession} onChange={(e) => setEditProfession(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="trait">Edit Trait:</Label>
                            <Input name="trait" placeholder="Trait" value={editTrait} onChange={(e) => setEditTrait(e.target.value)} />
                    </FormGroup>
                    <Button type="submit" color="warning">Edit</Button>
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default CharacterEdit