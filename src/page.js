import React from 'react';
import Board from './board.js';


export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            className: 'page',
            profil :{
            nom : "Home",
            prenom:"Page",
            datedenaissance : "",
            backgroundColor : "#ff0000"
        }


        };
    }



    render() {
        return (
            <div className={this.state.className}>
                <button className="buttonName" onClick={() => this.profilClaude()}>HomePage</button>
                <button className="buttonName" onClick={() => this.profilMichel()}>Michel</button>
                <button className="buttonName" onClick={() => this.profilClaude()}>Claude</button>
                <button className="buttonName" onClick={() => this.profilClaude()}>Anne</button>
                <Board className={this.state.profil} />
            </div>
        );
    }

    homePage() {
        this.setState({})
    }

    profilMichel() {
        console.log('Wesh')
    }

    profilClaude() {


    }
}