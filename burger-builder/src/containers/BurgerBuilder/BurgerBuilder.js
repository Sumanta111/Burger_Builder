import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
     render (){
       // console.log(this.props.ingredientType);
         return (
            <Aux>
                <Burger ingredient={this.props.ingredientType} />
                <div>Burger Control</div>
            </Aux>
         )
    }
}

export default BurgerBuilder;