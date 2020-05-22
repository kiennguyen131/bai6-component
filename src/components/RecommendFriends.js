import React, { Component } from 'react';
import "./../css/RecommendedFriends.css";
import FollowFriendListItem from "./FollowFriendListItem";

class RecommendedFriends extends Component {
    render() {
        return (
            <div className="RecommendedFriends">
                <div className="title">
                    <p>Gợi ý cho bạn</p>
                    <a href="#">Xem tất cả</a>
                </div>

                <div className="listFriend">
                    {
                       this.props.friends.map(friend => <FollowFriendListItem src={friend.src} name={friend.name} />)  
                    }
                </div>
            </div>
        )
    }
}

export default RecommendedFriends;