import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, location, race, gender, age, alignment, profession, trait) {
  return { name, location, race, gender, age, alignment, profession, trait };
}

export default function CharacterTable(props) {
  const classes = useStyles();
  const [rows, setRows] = React.useState([])

React.useEffect(() => {
  setRows([
    // props.character.map((character) => {

    // })
    
  createData('Sarah', 'Ravenloft', 'Elf', 'Female', 'Adult', 'Chaotic Neutral', 'Warlock', 'Impatient'),
  ])
}, [])

return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Race</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Alignment</TableCell>
            <TableCell align="right">Profession</TableCell>
            <TableCell align="right">Trait</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.race}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.alignment}</TableCell>
              <TableCell align="right">{row.profession}</TableCell>
              <TableCell align="right">{row.trait}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}