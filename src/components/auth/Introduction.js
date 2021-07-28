import React from 'react';
import { Paper } from '@material-ui/core';

function Introduction () {
    return(
        <div>
            <Paper style={{width:"100%", minHeight:"60vh", display:"flex", flexDirection:"column", paddingTop: "15vh", paddingLeft:"5px", paddingRight:"5px",borderRadius:"1rem", border:"solid red 3px"}}>
                <h3>Welcome to the Dungeons and Dragons Generator!</h3>
                <br />
                <h5>Sign up and create your own characters to fill the world for any RPG game.</h5>
            </Paper>
        </div>
    )
}

export default Introduction;