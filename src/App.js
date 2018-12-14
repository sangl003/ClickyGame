import React, { Component } from "react";
import Card from "./component/Card";
import Wrapper from "./component/wrapper";
import Title from "./component/Title";
import cartoons from "./cartoons.json";
import Footer from "./component/Footer"
import { reset } from "ansi-colors";

class App extends Component {
  state = {
    cartoons,
    score: 0,
  };

  shuffle = array => (
    array
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
  );

  handleClick = (id, clicked) => {
    const cartoonsClickCheck = this.state.cartoons;
    if (clicked) {
      this.setState({
        cartoons,
        score: 0,
      })

    } else {
      cartoonsClickCheck.forEach(cartoon => {
        if (cartoon.id === id) {
          cartoon.clicked = true
        }
      })
      return (
        this.setState({
          cartoons: this.shuffle(cartoonsClickCheck),
          score: this.state.score + 1,
        })
        
      )

    }
  }
  render() {
    return (
    
<div class ="container">
  <div class ="row">
    <div class="col-12">
        <Title>Click it Away! Score: {this.state.score}</Title> 
    </div>

        {this.state.cartoons.map(cartoon => (
          
          <Card
            id={cartoon.id}
            key={cartoon.id}
            name={cartoon.name}
            image={cartoon.image}
            clicked={cartoon.clicked}
            handleClick={this.handleClick}
          />
        ))}     
  </div>
  <div class ="row">
        <div class="col-12">
          <footer> Hope you Enjoyed 
          <p>Copyright (c) 2018 Sharvari Sangle <a href="https://github.com/sangl003/ClickyGame">Github </a></p>
          </footer>
      </div>
  </div>
</div>
          
    );
  }
}

export default App;