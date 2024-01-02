import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Mycard extends Component {
  state = {
    person: {
      Name: "Lebron james",
      bio: "LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association.",
      imgSrc:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSuptTz51sMerQj94ULfO8tFqtAtuQ-5fGh6_oFA43RwiJo0ZLPR4kFmXo4MRqxTDHtn1ru4uwR4IkZcsI",
      proffesion: "Basketball player",
    },

    counter: 0,
  };
  componentDidMount() {
    this.setinterval = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.state.person.imgSrc} />
          <Card.Body>
            <Card.Title>{this.state.person.Name}</Card.Title>
            <Card.Text>{this.state.person.proffesion}</Card.Text>
            <Card.Text>{this.state.person.bio}</Card.Text>
            <p>mounted since {this.state.counter} seconds</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
