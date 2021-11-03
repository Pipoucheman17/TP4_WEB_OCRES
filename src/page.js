import React from 'react';
import Board from './board.js';
import Omnes from './Omnes.PNG';

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
            },
            likeTable: { profil1: 0, profil2: 0, profil3: 0, },
        };
    }



    render() {
        return (
            <div className="container-fluid" style={{ padding: "10%", paddingTop: "0%" }}>
                <div className="row justify-content-around">
                    <button className={this.state.Buttonstyle} onClick={() => this.profilMichel()}>Michel</button>
                    <button className={this.state.Buttonstyle} onClick={() => this.profilClaude()}>Claude</button>
                    <button className={this.state.Buttonstyle} onClick={() => this.profilAnne()}>Anne</button>
                </div>
                <Board profil={this.state.profil} className={this.state.profil.className2} />
                <div className="container-fluid tweet">
                    <div>
                        <img src={Omnes} width="80%" alt="Omnes" />
                        <button className={this.state.LikebuttonStyle} style={{ margin: "10px" }} onClick={() => this.addLikes()} >
                            Likes {this.diplayLikes()}
                        </button>

                    </div>

                </div>

            </div>
        );
    }


    addLikes() {
        if (this.state.profil.prenom === "Michel") {
            this.setState({
                likeTable: {
                    profil1: this.state.likeTable.profil1 + 1,
                    profil2: this.state.likeTable.profil2,
                    profil3: this.state.likeTable.profil3
                }
            });
        }
        if (this.state.profil.prenom === "Claude") {
            this.setState({
                likeTable: {
                    profil1: this.state.likeTable.profil1,
                    profil2: this.state.likeTable.profil2 + 1,
                    profil3: this.state.likeTable.profil3
                }
            });
        }
        if (this.state.profil.prenom === "Anne") {
            this.setState({
                likeTable: {
                    profil1: this.state.likeTable.profil1,
                    profil2: this.state.likeTable.profil2,
                    profil3: this.state.likeTable.profil3 + 1,
                }
            });
        }
        this.diplayLikes();
    }


    diplayLikes() {
        if (this.state.profil.prenom === "Michel") {
            return this.state.likeTable.profil1;
        }
        if (this.state.profil.prenom === "Claude") {
            return this.state.likeTable.profil2;
        }
        if (this.state.profil.prenom === "Anne") {
            return this.state.likeTable.profil3;
        }
    }

    profilMichel() {
        this.setState({
            profil: {
                nom: "Durant",
                prenom: "Michel",
                age: "23/04/1979",
                className2: "board",
            }
        });
    }

    profilClaude() {
        this.setState({
            profil: {
                nom: "Pont",
                prenom: "Claude",
                age: "13/06/1975",
                className2: "board",
            }
        });
    }

    profilAnne() {
        this.setState({
            profil: {
                nom: "Lamarre",
                prenom: "Anne",
                age: "12/12/1976",
                className2: "board",

            }
        })
    }

    refresh() {
        var profile = this.state.profil;
        return profile;
    }
}