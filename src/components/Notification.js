import React, { Component} from 'react';
import "./../css/Notification.css";

class Notification extends Component{
    render(){
        const { hasUnread } = this.props;
        const srcImg = "https://image.flaticon.com/icons/svg/2097/2097743.svg";
        const widthImg = 50;
        return (
            <div className="Notification">
              {hasUnread && (
                <div className="noti-area">
                  <img src={srcImg} width={widthImg} />
                  <div className="red-dot"></div>
                </div>
              )}
              {!hasUnread && <img src={srcImg} width={widthImg} />}
            </div>
        );
    }
}
export default Notification;