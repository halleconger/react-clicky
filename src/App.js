import React, { Component } from "react";
import GreysFriendCard from "./components/GreysFriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import greys from "./greys.json";
import "./App.css";

class App extends Component {
  state = {
    greys,
    score: 0,
    topScore: 0,
    clicked: []
  }

  shuffleImagesArray = array => {
    let currentIndex = array.length
    let randomIndex
    let itemAtIndex

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      itemAtIndex = array[randomIndex]

      currentIndex--
      array[randomIndex] = array[currentIndex]
      array[currentIndex] = itemAtIndex
    }
    return array;
  }

  friendClick = id => {
    console.log("CLICKED")

    if (this.state.clicked.indexOf(id) === -1) {
      this.trackScore();
      this.setState({
        clicked: this.state.clicked.concat(id)
      })
    } else {
      this.resetGame();
    }
  }

  trackScore = () => {
    const userScore = this.state.score + 1
    this.setState({
      score: userScore
    })

    if (userScore === 12) {
      alert("Congrats, You Won!")
    } else if (userScore >= this.state.topScore) {
      this.setState({
        topScore: userScore,
        greys: this.shuffleImagesArray(this.state.greys)
      })
    }

  }

  resetGame = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clicked: []
    })
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          title="Clicky-Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title>
          Click on an image to earn points, but don't click on an image more than once!
        </Title>

        {this.state.greys.map(greys => (
          <GreysFriendCard
            key={greys.id}
            id={greys.id}
            image={greys.image}
            shuffleImagesArray={this.shuffleImagesArray}
            friendClick={this.friendClick}
            trackScore={this.trackScore}
            resetGame={this.resetGame}
          />
        ))}
        <Footer name="Clicky-Game 2018" />
      </Wrapper>
    );
  }

}

export default App;
