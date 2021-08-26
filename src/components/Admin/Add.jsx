import { IconButton, makeStyles,  Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '40ch',
        }}
}))

const Add = () => {
    const classes = useStyles()
    let history = useHistory()
    const [values, setValues] = useState({
        title: '',
        image: '',
        price: '',
        type: '',
        description: ''
    })

    const { addProduct } = useContext(productContext)

    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name] : e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        addProduct(values)
        history.push('/')
    }
    return (

        <div className="container">
            <section className="panel panel-default">
                <div className="panel-heading"> 
                <h3 className="panel-title">Добавление продукта</h3> 
                </div> 
                <div className="panel-body">
                <form action="designer-finish.html" className="form-horizontal" role="form">
                <div className="form-group">
                    <label for="name" className="col-sm-3 control-label"></label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Название" name='title' onChange={handleInp} value={values.title} variant='outlined' label='Title'/>
                    </div>
                </div> 
                <div className="form-group">
                    <label for="name" className="col-sm-3 control-label"></label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Фото" name='image' onChange={handleInp} value={values.image} variant='outlined' label='Image'/>
                    </div>
                </div> 
                <div className="form-group">
                    <label for="name" className="col-sm-3 control-label"></label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Цена"  name='price' onChange={handleInp} value={values.price} variant='outlined' label='Price'/>
                    </div>
                </div> 
                <div className="form-group">
                    <label for="name" className="col-sm-3 control-label"></label>
                    <div class="col-sm-9">
      <textarea class="form-control"  placeholder="Описание"  name='description' onChange={handleInp} value={values.description} variant='outlined' label='Description'></textarea>
    </div>
                </div> 
                <div className="form-group">
                    <div className="col-sm-offset-3 col-sm-9">
                    <IconButton aria-label="share" onClick={handleSave}>
                            <Button variant="contained" color="primary">Добавить</Button>
                        </IconButton>
                    </div>
                </div> 
                </form>
                
                </div>
            </section>
        </div>

    );
};

export default Add;