import React, {Component} from "react";

export default class Nav extends Component {
    render() {
        return(
            <nav className="navBar">
                <ul>
                    <li>Home</li>
                    <li>What's going on?</li>
                    <li>Contact Me (please don't)</li>
                </ul>
            </nav>
        )
    }
}