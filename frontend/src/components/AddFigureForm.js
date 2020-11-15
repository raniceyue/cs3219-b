import React, { useState, useEffect } from 'react';

import { Box, Card, CardActionArea, CardHeader, CardContent } from '@material-ui/core';
import { FormControl, TextField, Button, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'; 
import { makeStyles, createStyles } from '@material-ui/core';

import { AddFigure } from '../data/api';

const AddFigureForm = () => {

    const useStyles = makeStyles((theme) =>
        createStyles({
            text: {
                margin: '10px 0px'
            },
            submit: {
                margin: '15px'
            }
        }),
    );

    const classes = useStyles();

    const [figure, setFigure] = useState({
        name: "",
        price: 0,
        brand: "",
        toSell: false
    });

    let formErrors = { name: "false", price: "false", brand: "false"};

    useEffect(() => {
        formErrors.name = "false"
        formErrors.price = "false"
        formErrors.brand = "false"
    }, [formErrors, figure]);

    const handleSubmit = async() => {
        if (figure.name === "" || figure.price === "" || figure.brand === "") {
            alert("All fields in the form must be filled");
        } else {
            let res = await AddFigure(figure);
            console.log(res);
            window.location.reload();
        }
    }

    return(
        <Box>
            <Card>
                <CardHeader title="Add Figure"/>
                <CardContent>
                    <FormControl>
                        <TextField 
                            className={classes.text}
                            variant="outlined"
                            type="String"
                            label="Figure Name"
                            onChange={(e) => {
                                setFigure({...figure, name: e.target.value}); 
                                formErrors.name = "false"; 
                            }}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField 
                            className={classes.text}
                            variant="outlined"
                            type="Number"
                            label="Price"
                            onChange={(e) => { 
                                setFigure({...figure, price: e.target.value});
                                formErrors.price = "false"; 
                            }}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField 
                            className={classes.text}
                            variant="outlined"
                            type="String"
                            label="Brand"
                            onChange={(e) => {
                                setFigure({...figure, brand: e.target.value});
                                formErrors.brand = "false"; 
                            }}
                        />
                    </FormControl>
                    <FormControl component="fieldset">
                        <RadioGroup onChange={(e) => setFigure({...figure, toSell: e.target.value})} value={figure.toSell}>
                            <FormControlLabel value="true" control={<Radio />} label="Sell" />
                            <FormControlLabel value="false" control={<Radio />} label="Keep" />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            
                <CardActionArea>
                    <Button className={classes.submit} variant="contained" onClick={handleSubmit}>Submit</Button>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default AddFigureForm;