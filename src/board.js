import React from "react";
import Picture from "./picture.js";

export default class Board extends React.Component {
    render() {
        return (
            <main className="board">
                <button className="boutonT" onClick={this.changeSize()}>Click toi connard</button>
                <Picture />
            </main>
        );
    }

    changeSize() {
        
        }

}