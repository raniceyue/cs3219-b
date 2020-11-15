import React, { useState } from 'react';
import { Typography, Card, CardContent, CardHeader, 
            Menu, MenuItem, 
            Dialog, DialogContent, DialogTitle,
            DialogActions } from '@material-ui/core';
import { TextField, Button, FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { DeleteFigure, UpdateFigure } from '../data/api';

export const Figure = (props) => {

    const useStyles = makeStyles((theme) =>
        createStyles({
            root: {
                margin: 0,
                padding: theme.spacing(2),
            },

            card: {
                minHeight: '210px'
            },

            forsale: {
                color: 'red',
                margin: '0px 0px 0px 200px'
            },

            closeButton: {
                position: 'absolute',
                right: theme.spacing(1),
                top: theme.spacing(1),
            },

            textfield: {
                margin: '10px 0px'
            },

            editDialogueHeader: {
                maxWidth: '80%'
            }
        })
    );

    const styles = useStyles();

    const [editedFigure, setEditedFigure] = useState({
        name: props.props.name,
        price: props.props.price,
        brand: props.props.brand,
        toSell: props.props.toSell
    });

    // Handle open menu
    const [anchorEl, setAnchorEl] = useState(null);

    // Handle open edit dialogue
    const [edit, setEdit] = useState(false);

    // Open menu dropdown
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    
    // Close menu dropdown
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseEdit = () => {
        setEdit(false);
    }

    const handleMarkSale = async(id) => {
        handleClose();
        editedFigure.toSell = true;
        console.log(editedFigure)
        let res = await UpdateFigure(id, editedFigure);
        if (res) {
            console.log("MARKED FOR SALE! : " + JSON.stringify(res.data));
            alert("Figure has been marked for sale!");
            handleClose();
            window.location.reload();
        }
    }

    const handleEditFigure = async(id) => {
        handleClose();
        if (editedFigure.name === "" || editedFigure.price === "" || editedFigure.brand === "") {
            alert("All fields in the form must be filled");
        } else {
            await UpdateFigure(id, editedFigure);
            alert("Figure has been updated!");
            handleCloseEdit();
            window.location.reload();
        }
    }

    const handleDeleteFigure = async(id) => {
        handleClose();
        let res = await DeleteFigure(id);
        console.log(res);
        window.location.reload();
    }

    
    return(
        <>
            <Card key={props.props.id}>
                <CardHeader 
                    title={props.props.name} 
                    subheader={props.props.brand}
                    action={
                        <>
                        <IconButton aria-label="menu" onClick={handleClick}>
                          <MoreVertIcon />
                        </IconButton>
                        <Menu 
                            open={Boolean(anchorEl)}
                            onClose={handleClose}                            
                            anchorEl={anchorEl}
                            keepMounted 
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ horizontal: "center" }}>

                            <MenuItem onClick={() => setEdit(true)}>Edit Figure</MenuItem>
                                { props.props.toSell 
                                    ? <> </> 
                                    : <MenuItem onClick={() => handleMarkSale(props.props._id)}>
                                            Mark For Sale
                                        </MenuItem> 
                                }
                            <MenuItem onClick={() => handleDeleteFigure(props.props._id)}>Delete</MenuItem>
                        </Menu>
                        </>
                      }
                />

                <CardContent>
                    <Typography variant="body1">
                        $ {props.props.price}
                        { props.props.toSell && <Typography className={styles.forsale} variant="button">For Sale</Typography>} 
                    </Typography>
                </CardContent>

                <Dialog open={edit} onClose={handleCloseEdit}>
                    <DialogTitle modal={false} onClose={handleCloseEdit} className={styles.editDialogueHeader}>
                        Edit Figure "{props.props.name}"
                        <IconButton aria-label="close" className={styles.closeButton} onClick={handleCloseEdit}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Please include at least 1 field you want to edit. 
                        </Typography>
                        <FormControl>
                            <TextField 
                                className={styles.textfield}
                                variant="outlined"
                                type="String"
                                value={editedFigure.name}
                                label="Figure Name"
                                placeholder={props.props.name}
                                onChange={(e) => setEditedFigure({...editedFigure, name: e.target.value})}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField 
                                className={styles.textfield}
                                variant="outlined"
                                type="Number"
                                value={editedFigure.price}
                                label="Price"
                                placeholder={props.props.price}
                                onChange={(e) => setEditedFigure({...editedFigure, price: e.target.value})}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField 
                                className={styles.textfield}
                                variant="outlined"
                                type="String"
                                value={editedFigure.brand}
                                label="Brand"
                                placeholder={props.props.brand}
                                onChange={(e) => setEditedFigure({...editedFigure, brand: e.target.value})}
                            />
                        </FormControl>
                        <br></br>
                        <FormControl component="fieldset">
                            <RadioGroup value={editedFigure.toSell} 
                                        onChange={(e) => {
                                            setEditedFigure({...editedFigure, toSell: e.target.value})
                                            console.log(e.target.value);
                                        }}>
                                <FormControlLabel value="true" control={<Radio />} label="Sell" />
                                <FormControlLabel value="false" control={<Radio />} label="Keep" />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={() => handleEditFigure(props.props._id)}>Save Changes</Button>
                    </DialogActions>
                </Dialog>
            </Card>
        </>
    );
};

export default Figure;