import React from "react";
import Picture from "./picture.js";

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "#ff0000",
    }
    this.changeStyle = this.changeStyle.bind(this);
  }


  changeStyle() {
    var chaine = "0123456789abcdef";
    var styleBckg = "#";
    for (let i = 0; i <= 6; i++) {
      styleBckg += chaine.charAt(Math.random() * (16));
    }
    console.log(styleBckg);
    this.setState({ backgroundColor: styleBckg });
  }


  render() {
    // let profil = this.props.profil;

    return (
      <main className="board" style={{background : this.state.backgroundColor}}>
        <button onClick={this.changeStyle}>Change Style </button>
        <Picture />
      </main>
    );
  }
}