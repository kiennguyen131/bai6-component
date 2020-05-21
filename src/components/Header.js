import React, { Component } from 'react';
import "./../css/Header.css"

class Header extends Component {
    render() {
        return (
            <ul className="Header">
                <li>
                    <a className="go-back" href="#">
                        <svg
                            id="i-arrow-left"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            width="12"
                            height="12"
                            fill="none"
                            stroke="currentcolor"
                            stroke-linecap="butt"
                            stroke-linejoin="bevel"
                            stroke-width="7.8125%"
                            >
                            <path d="M10 6 L2 16 10 26 M2 16 L30 16" />
                        </svg>
                        Go back
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                            src="https://cdn.glitch.com/a3572504-ff06-4a5c-8edd-8c1b0df51ec5%2Flogo-brand.png?v=1588582535284"
                            alt="logo-brand"
                            width="200px"
                        ></img>
                    </a>
                </li>
                <li>
                    <a className="sign-up" href="#">
                        Sign up
                    </a>
                </li>
            </ul>

        )
    };
}

export default Header;