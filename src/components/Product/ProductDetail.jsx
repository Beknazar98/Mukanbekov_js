import { makeStyles} from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';
import './ProductDetail.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto'
    }
}))

const ProductDetail = () => {
    const {id} = useParams()
    const {detail, getDetail} = useContext(productContext)
    const classes = useStyles()

    

    useEffect(() =>{
        getDetail(id)
    }, [id])


    let icons1 = (
        <CardActions disableSpacing>
          <Link to={`/edit/${detail.id}`} style={{color: 'Black', textDecoration: 'none'}}>
            <IconButton aria-label="add to favorites">
              <EditIcon />
            </IconButton>
          </Link>
          {/* <IconButton aria-label="share" onClick={() => deleteProduct(detail.id, history)} style={{color: 'white', textDecoration: 'none'}}>
          <DeleteIcon />
      </IconButton> */}
        </CardActions>
      )


    return (
        detail ? (
            <div class="container1">
                <div class="car">
                    <div class="shoeBackground">
                        <img src={detail.image} height="350" width="327"/>
                    </div>
                    <div class="info">
                        <div class="shoeName">
                            <div>
                                <h1 class="big" >{detail.title}</h1>
                                <span class="new">new</span>
                            </div>
                            <h3 class="small">Кредит / рассрочка</h3>
                        </div>
                        <div class="description">
                            <h3 class="title">Описание</h3>
                            <p class="text">{detail.description}</p>
                        </div>
                        <div class="buy-price">
                            <a href="#" class="buy">{icons1}</a>
                            <div class="price">
                                <h1>{detail.price}$</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                ) : (<h1>Loading...</h1> )
            
    );
};

export default ProductDetail;