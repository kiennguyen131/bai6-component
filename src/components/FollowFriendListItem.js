import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./../css/FollowFriendListItem.css";

class FollowFriendListItem extends Component {
    render() {
        return (
            <div className="FollowFriendListItem">
                <div className="inf">
                    <img src={this.props.src} />
                    <div>
                        <a href="#" className="friendName">
                            {this.props.name}
                        </a>
                        <p>Gợi ý cho bạn</p>
                    </div>
                </div>
                <a href="#">Theo dõi</a>
            </div>
        );
    }
}

FollowFriendListItem.propTypes = {
      name: PropTypes.string.isRequired,
      src: PropTypes.string

}

export default FollowFriendListItem;