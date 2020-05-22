import React, { Component, useState } from 'react';
import "./../css/ListUser.css"

class ListUser extends Component {
    render() {
        let user = this.props.listUser;
        return (
            <div className="ListUser">
                <table>
                    <tr >
                        <td>#</td>
                        <td>First</td>
                        <td>Last</td>
                        <td>Handle</td>
                    </tr>
                    {
                        user.map((user, index) => (
                        <tr className={ user.st % 2 === 1 ? 'is-even' : ''}>
                            <td>{user.st}</td>
                            <td>{user.First}</td>
                            <td>{user.Last}</td>
                            <td>{user.Handle}</td>
                        </tr>
                        ))
                    }
                </table>
            </div>
                
        )
    }
}

export default ListUser;