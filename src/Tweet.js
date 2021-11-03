import React from "react";
import Omnes from "./Omnes.PNG";

export default class Tweet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            LikebuttonStyle: "container-fluid",
            likes: this.props.likes,
        };
    }


    render() {
        return (
            <div className="container-fluid tweet">
                <div>
                    <img src={Omnes} width="80%" alt="Omnes" />
                    <button className={this.state.LikebuttonStyle} style={{ margin: "10px" }} onClick={() => this.addLikes()} >
                        Likes {this.state.likes}
                    </button>
                </div>

            </div>
        );
    }

    addLikes() {
        this.setState({ likes: this.state.likes + 1 });
    }

    handleChange(event) {
        this.props.onChangeLikes(event.target.value);
    }
}
