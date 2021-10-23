import React from "react";
import Picture from "./picture.js";

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styleMain :{
        backgroundColor: "",
      },
    }
    this.changeStyle = this.changeStyle.bind(this);
    }

  render() {
    let profil = this.props.profil;

    return (
      <main className="board" style={this.state.styleMain}>
        <button onClick={this.changeStyle}>Change Style </button>
        <Picture />
      </main>
    );
  }

  changeStyle() {
    console.log('changeStyle');
    var chaine = "0123456789abcdef";
    var styleBckg = "#";
    for (let i = 0; i <= 6; i++) {
      styleBckg += chaine.charAt(Math.random() * (16));
      console.log(styleBckg);
    }
    this.setState({styleMain:{backgroundColor: styleBckg},},);
  }

}