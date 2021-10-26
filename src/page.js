import React from 'react';
import Board from './board.js';


export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            className: 'page',
            profil: {
                nom: "Home",
                prenom: "Page",
                datedenaissance: "",
                backgroundColor: "#ff0000",
                className2: "board"
            }


        };
    }



    render() {
        return (
            <div className={this.state.className}>
                <button className="buttonName" onClick={() => this.homePage()}>HomePage</button>
                <button className="buttonName" onClick={() => this.profilMichel()}>Michel</button>
                <button className="buttonName" onClick={() => this.profilClaude()}>Claude</button>
                <button className="buttonName" onClick={() => this.profilClaude()}>Anne</button>
                <Board profile={this.state.profil} className={this.state.profil.className2} />
            </div>
        );
    }

    homePage() {
        this.setState({
            profil: {
                nom: "Home",
                prenom: "Page",
                age: "",
                backgroundColor: "#ff0000",
                className2: "board"
            }
        })
    }

    profilMichel() {
        this.setState({
            profil: {
                nom: "Durant",
                prenom: "Michel",
                age: "23/04/1979",
                className2: "board"
            }
        });
    }

    profilClaude() {
        this.setState({
            profil: {
                nom: "Pont",
                prenom: "Claude",
                age: "13/06/1975",
                className2: "board"
            }
        });
    }

    refresh() {
        var profile = this.state.profil;
        return profile;
    }
}