import React from 'react';
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) =>{
   // console.log(props.ingredient);
    const transformedIngredients = Object.keys(props.ingredient).map(
        igKey => {
            return [...Array(props.ingredient[igKey])].map((_,i)=>{
                return <BurgerIngredients key={igKey+i} type={igKey} />
            })
        }
    )
  //  console.log(transformedIngredients)
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default burger;