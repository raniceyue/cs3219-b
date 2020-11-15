import React from "react";
import { Container, Grid, AppBar, Typography, Toolbar } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';

import Home from './containers/Home';
import AddFigureForm from './components/AddFigureForm'

const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
			padding: '50px'
		},
	}),
);

const App = () => {
	const classes = useStyles();

	// DEBUG
	console.log(process.env.API_URL);
	console.log(process.env.NODE_ENV);
	
	return(
		<>
			<AppBar position="static">
				<Toolbar variant="dense">
					<Typography variant="h6" color="inherit">
						Figure Collection
					</Typography>
				</Toolbar>
			</AppBar>
			<Container minWidth="md" className={classes.container}>
				<Grid container spacing={0}>
					<Grid item xs={9}>
						<Home/>
					</Grid>
					<Grid item xs={3}>
						<AddFigureForm/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default App;