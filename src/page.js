import React from 'react';
import Board from './board.js';
import Tweet from './Tweet.js';


export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Buttonstyle: 'col-3 buttonName',
            profil: {
                nom: "Durant",
                prenom: "Michel",
                age: "23/04/1979",
                className2: "board",
                backgroundColor: "#ffffff",
            }
        };
    }



    render() {
        return (
            <div className="container-fluid page">
                <div className="row justify-content-around">
                    <button className={this.state.Buttonstyle} onClick={() => this.profilMichel()}>Michel</button>
                    <button className={this.state.Buttonstyle} onClick={() => this.profilClaude()}>Claude</button>
                    <button className={this.state.Buttonstyle} onClick={() => this.profilAnne()}>Anne</button>
                </div>
                <Board profil={this.state.profil} className={this.state.profil.className2} />
                <Tweet/>
            </div>
        );
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

    profilAnne(){
        this.setState({
            profil: {
                nom:"Lamarre",
                prenom:"Anne",
                age:"12/12/1976",
                className2:"board"
            }
        })
    }

    refresh() {
        var profile = this.state.profil;
        return profile;
    }
}