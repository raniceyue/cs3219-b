import React, { useEffect, useState } from "react";
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';

import Figure from '../components/Figure';

import { ViewFigures } from '../data/api';

const Home = () => {
    const [Figures, setFigures] = useState([]);

    useEffect(() => {
		const getFigures = async() => {
			const data = await ViewFigures();
			if (data) {
				setFigures(data);
				console.log(data);
			}
		}

		getFigures();
    }, []);

    const useStyles = makeStyles((theme) =>
        createStyles({
            grid: {
                padding: '0px 50px'
            },
        }),
    );

    const classes = useStyles();
    
    if (Figures.length !== 0) {
		return (
			<Grid container spacing={2} direction="row" className={classes.grid}>
                { Figures.map((figure) => (
                        <Grid item xs={6}>
                            <Figure key={figure._id} props={figure}/>
                        </Grid>
                    )) 
                }
			</Grid>
		);
	} else {
		return(
			<>
				<Typography>You have no figures!</Typography>
			</>
		);
	}
}

export default Home;