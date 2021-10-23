import React from "react";
import Picture from "./picture.js";

export default class Board extends React.Component {
   
  constructor(props) {
      super(props);
      
  }
  
    render() {
      //  let className = this.state.className;
        return (
            <main  className={this.props.className}>
                <button>Clique ici </button>
                <Picture />
            </main>
        );
    }

}