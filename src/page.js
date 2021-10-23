import React from 'react';
import Board from './board.js';


export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = { className: 'normal' };

    }



    render() {
        return (
            <div className="page">
                <button onClick={() => this.profilMichel()}>Michel</button>
                <button onClick={() => this.profilClaude()}>Claude</button>
                <Board className={this.state.profil}/>
            </div>
        );
    }

    profilMichel() {
        console.log('Wesh')
    }

    profilClaude(){
        

    }
}