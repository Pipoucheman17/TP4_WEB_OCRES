import React from "react";
import Picture from "./picture.js";

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styleMain:{
      backgroundColor: "#ff0000",
      margin:"auto",
      
      }
    }
  }


  changeStyle() {
    var chaine = "0123456789ABCDEF";
    var styleBckg = "#";
    for (let i = 0; i < 6; i++) {
      styleBckg += chaine.charAt(Math.random() * (15-1)+1);
    }
    this.setState({styleMain: ({ backgroundColor: styleBckg })});
  }


  render() {
    // let profil = this.props.profil;

    return (
      <main className="board" style={ this.state.styleMain}>
        <p>Nom : {this.props.profile.nom}</p>
        <button onClick={() => this.changeStyle()}>Change Style </button>
        <Picture />
      </main>
    );
  }
}