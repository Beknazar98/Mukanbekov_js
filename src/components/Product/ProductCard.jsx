import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { productContext } from '../../contexts/ProductsContext';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard({item, history}) {
  const classes = useStyles();
  const {deleteProduct} = useContext(productContext)



  let icons = (
    <CardActions disableSpacing>
      <Link to={`/edit/${item.id}`} style={{color: 'white', textDecoration: 'none'}}>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
      </Link>
      <IconButton aria-label="share" onClick={() => deleteProduct(item.id, history)} style={{color: 'white', textDecoration: 'none'}}>
          <DeleteIcon />
      </IconButton>
    </CardActions>
  )

  return (


<div class="wrapper" className={classes.root}>
      <div class="cart" data-effect="zoom">

        <Link to={`/detail/${item.id}`} style={{textDecoration:'none', color: 'black'}}>

            <button class="card__save  js-save" type="button">
              <i class="fa  fa-bookmark"></i>
            </button>
            <figure class="card__image">
              <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={item.image} alt="Short description" />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">{item.title}</h3>
              <p class="card__job">цена & гарантия</p>
            </div>
            <div class="card__footer">
              <p class="">{item.price}$</p>
              
            </div>

        </Link>
        <div class="card__footer2">
        <p class="">{icons}</p>
        </div>


      </div>

    </div>


  );
}
