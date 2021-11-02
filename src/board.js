import React from "react";
import Picture from "./picture.js";

export default class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styleMain: {
        backgroundColor: "#ffffff",
      }
    }
  }


  changeStyle() {
    var chaine = "0123456789ABCDEF";
    var styleBckg = "#";
    for (let i = 0; i < 6; i++) {
      styleBckg += chaine.charAt(Math.random() * (15 - 1) + 1);
    }
    this.setState({ styleMain: ({ backgroundColor: styleBckg }) });
  }


  render() {

    return (
      <main className="board container" style={this.state.styleMain}>
        <div className="row">
          <div className="col-4 offset-5"><Picture /></div>

          <div className="col-4 lead">Nom : {this.props.profil.nom}</div>
          <div className="col-4 lead">Prénom : {this.props.profil.prenom}</div>
          <div className="col-4 lead">Date de naissance : {this.props.profil.age}</div>
          <hr></hr>
          <button className="buttonStyle col-2" style={{marginBottom: "20px", marginLeft:"20px"}} onClick={() => this.changeStyle()}>Change Style </button>
        </div>
      </main>
    );
  }
}