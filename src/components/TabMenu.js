import React, { Component } from 'react';
import "./../css/TabMenu.css"

class TabMenu extends Component {
    render() {
        let Items = this.props.items.map((item) =>(
            <li>
                <a href="#">
                    <img src={item.src} width="50" />
                    <br />
                    {item.label.toUpperCase()}
                </a>
            </li>
        ));
        return (
           <div className="TabMenu">
               <ul>{Items}</ul>
           </div> 
        )
    }
}

export default TabMenu;