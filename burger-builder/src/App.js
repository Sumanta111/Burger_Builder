import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {
    ingredients:{
      bacon:0,
      cheese:0,
      meat:0,
      salad:0
    }
  }
  render() {
  //  console.log(this.state.ingredients)
    return (
      <div>
       <Layout>
         <BurgerBuilder
        ingredientType = {this.state.ingredients}
         />
       </Layout>
      </div>
    );
  }
}

export default App;
