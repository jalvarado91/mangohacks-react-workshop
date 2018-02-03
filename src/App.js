import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LimitCount from "./LimitCount"

var TWEET_LIMIT = 60;
var partyParrotUrl = "http://cultofthepartyparrot.com/parrots/parrot.gif";

class App extends Component {
  state = {
    myTweet: "",
    gifUrl: null
  }

  handleChange = (changeEvent) => {
    // console.log(changeEvent.target.value);

    this.setState({
      myTweet: changeEvent.target.value
    });
  }

  handleClick = (clickEvent) => {
    alert(this.state.myTweet);
  }

  handleGifClick = (clickEvent) => {
    this.setState({
      gifUrl: partyParrotUrl
    });
  }

  render() {
    var isTweetTooLong = this.state.myTweet.length > TWEET_LIMIT;
    var errorClass = isTweetTooLong ? "redBanana": "";

    return (
      <div className="App">
        <h1>{this.state.myTweet}</h1>
        <textarea 
          placeholder="What's on your mind?"
          value={this.state.myTweet}
          onChange={this.handleChange} />
        <br />
        <LimitCount text={this.state.myTweet} />
        <br />
        {this.state.myTweet.length > 0 ? 
          <button className={errorClass} onClick={this.handleClick}>Tweet</button>: 
          ""}


        {this.state.gifUrl != null ? 
          <img src={this.state.gifUrl} />: ""}
        <button onClick={this.handleGifClick}>Gif</button>
      </div>
    );
  }
}

export default App;
