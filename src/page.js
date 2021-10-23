import React from 'react';
import Board from './board.js';


export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = { className: 'normal' };

    }



    render() {
        return (
            <div>
                <button onClick={() => this.styleMichel()}>Michel</button>
                <button onClick={() => this.styleClaude()}>Claude</button>
                <Board className={this.state.className}/>
            </div>
        );
    }

    styleMichel() {
        this.setState({className: 'Michel'})
        console.log('Wesh')
    }

    styleClaude(){
        this.setState({className: 'Claude'});

    }
}