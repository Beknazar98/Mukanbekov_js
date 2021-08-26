import { Button, Grid, IconButton, TextField } from '@material-ui/core';
import { makeStyles, Paper } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        width: '1000px',
        margin: '50px auto',
        height: 'auto'
    },
    main: {
        width: '100%',
        height: '700px',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        color: '#fff'
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '40ch',
        }}
}))

const Edit = () => {
    let {id} = useParams();
    let history = useHistory();
    const classes = useStyles()
    const {edit, editProduct, saveEditProduct} = useContext(productContext)
    const [values, setValues] = useState(null)

    useEffect(() => {
        editProduct(id)
    }, [id])

    useEffect(() => {
        setValues(edit)
    }, [edit])

    const handleEditInp = (e) => {
        let obj = {
            ...values,
            [e.target.name] : e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        saveEditProduct(values)
        history.push('/')
    }
    return (
        <Grid className={classes.main} >

        <Paper elevation={3}>
            <h1>Изменение</h1>
            {
                values ? (
                    <div style={{display: 'flex', 
                    // justifyContent: 'space-between', 
                    color: 'black'}}>
                    <div>
                        <img style={{width: '400px'}} src={values.image} alt="smartphone image"/>
                    </div>

                    
                        <section className="panel panel-default">
                            <div className="panel-heading2"> 
                            </div> 
                            <div className="panel-body2">
                            <form action="designer-finish.html" className="form-horizontal" role="form">
                            <div className="form-group">
                                <label for="name" className="col-sm-3 control-label"></label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" placeholder="Название" name="title" onChange={handleEditInp} value={values.title} variant="outlined" label="Title"/>
                                </div>
                            </div> 
                            <div className="form-group">
                                <label for="name" className="col-sm-3 control-label"></label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" placeholder="Фото" name="image" onChange={handleEditInp} value={values.image} variant="outlined" label="Image"/>
                                </div>
                            </div> 
                            <div className="form-group">
                                <label for="name" className="col-sm-3 control-label"></label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" placeholder="Цена"  name="price" onChange={handleEditInp} value={values.price} variant="outlined" label="Price"/>
                                </div>
                            </div> 
                            <div className="form-group">
                                <label for="name" className="col-sm-3 control-label"></label>
                                <div class="col-sm-9">
      <textarea class="form-control" placeholder="Описание"  name="description" 
                                            onChange={handleEditInp} 
                                            value={values.description} 
                                            variant="outlined" label="Description"  ></textarea>
    </div>
                            </div> 
                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                <IconButton aria-label="share" onClick={handleSave}>
                                        <Button variant="contained" color="secondary">Сохранить</Button>
                                    </IconButton>
                                </div>
                            </div> 
                            </form>
                            
                            </div>
                        </section>

                </div>
                ) : (<h1>Loading...</h1> )
            }
        </Paper>
        </Grid>
    );
};

export default Edit;