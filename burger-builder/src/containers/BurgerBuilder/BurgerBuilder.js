import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{
     render (){
       // console.log(this.props.ingredientType);
         return (
            <Aux>
                <Burger ingredient={this.props.ingredientType} />
                <BuildControls />
            </Aux>
         )
    }
}

export default BurgerBuilder;