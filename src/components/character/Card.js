import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { Button } from 'reactstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: 'white',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


const CharacterCard = (props) => {
  const [isLoaded, setIsLoaded] = useState()
  const [image, setImage] = useState()
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const resources = {
    Female_Dragonborn: 'Dragonborn_head.png',
    Female_Dwarf: 'Female_Dwarf_head.png',
    Female_Elf: 'Female_Elf_head.png',
    Female_Gnome: 'Female_Gnome_head.png',
    Female_HalfElf: 'Female_HalfElf_head.png',
    Female_Halfling: 'Female_Halfling_head.png',
    Female_HalfOrc: 'Female_HalfOrc_head.png',
    Female_Human: 'Female_Human_head.png',
    Female_Tiefling: 'Female_Tiefling_head.png',
    Male_Dragonborn: 'Dragonborn_head.png',
    Male_Dwarf: 'Male_Dwarf_head.png',
    Male_Elf: 'Male_Elf_head.jpg',
    Male_Gnome: 'Male_Gnome_head.png',
    Male_HalfElf: 'Male_HalfElf_head.png',
    Male_Halfling: 'Male_Halfling_head.png',
    Male_HalfOrc: 'Male_HalfOrc_head.jpg',
    Male_Human: 'Male_Human_head.jpg',
    Male_Tiefling: 'Male_Tiefling_head.jpg',
    Default: 'Logo.png'
  }

  const deleteCharacter = (character) => {
    fetch(`http://localhost:3000/character/${character.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      })
    }).then(() => props.fetchCharacters())
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const CharacterDisplayImage = (imgGender, imgRace) => {
    // console.log(props.character.length)

    // let charLength = props.character.length

    // if (charLength != 0) {
      // setIsLoaded(true)
    //   let imgGender = props.character.gender
    //   let imgRace = props.character.race
      // console.log(imgGender)

      if (imgGender && imgRace) {
        let imgLookup = resources[`${imgGender}_${imgRace}`]
        let imgSrc = imgLookup ? imgLookup : resources.Default
        // setImage("./assets/" + imgSrc)
        // console.log(image)
        return(
          "./assets/" + imgSrc
        )
      }
    }
  



  const characterMapper = () => {
    return props.character.map((character) => {
      return (
        <div>
          <Card id="cards" className={classes.root} style={{ width: "300px" }}>
            <CardContent>
              <h3>{character.name}</h3>
            </CardContent>
            <CardMedia>
              {/* className={classes.media}
              image="" */}
              {/* {console.log(CharacterDisplayImage(character.gender, character.race))} */}
              <img src={CharacterDisplayImage(character.gender, character.race)} id="cardImage" />
            </CardMedia>
            <CardActions disableSpacing>
              <Button color="warning" onClick={() => { props.editUpdateCharacter(character); props.updateOn() }}>Edit</Button>
              <div id="spacer"> </div>
              <Button color="danger" onClick={() => { deleteCharacter(character) }}>Delete</Button>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Description:</Typography>
                <Typography Typography variant="body2" color="textSecondary" component="p">
                <p>{character.name} is a {character.gender}, {character.age} {character.race}.</p>
                    <p>{character.name} is located in {character.location}, and their alignment is {character.alignment}.</p>
                    <p>{character.name} is a {character.profession} and is {character.trait}.</p>

                  {/* <li>{character.location}</li>
                  <li>{character.race}</li>
                  <li>{character.gender}</li>
                  <li>{character.age}</li>
                  <li>{character.alignment}</li>
                  <li>{character.profession}</li>
                  <li>{character.trait}</li> */}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      )

    }
    )}

  useEffect(() => {
      CharacterDisplayImage()
    }, [CharacterDisplayImage])

  return (
      <div>
        <Grid container spacing={4} className={classes.gridContainer} justify="center">
          {characterMapper()}
        </Grid>
      </div>
    )
  }

  export default CharacterCard;