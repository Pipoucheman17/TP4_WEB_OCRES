import React from "react";
import Picture from "./picture.js";

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "#ff1234",
    }
  }


  changeStyle() {
    var chaine = "0123456789ABCDEF";
    var styleBckg = "#";
    for (let i = 0; i < 6; i++) {
      styleBckg += chaine.charAt(Math.random() * (15-1)+1);
    }
    this.setState({ backgroundColor: styleBckg });
    
  }


  render() {
    // let profil = this.props.profil;

    return (
      <div className="board" style={{background : this.state.backgroundColor}}>
        <button onClick={() => this.changeStyle()}>Change Style </button>
        <Picture />
      </div>
    );
  }
}