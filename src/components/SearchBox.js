import React, { Component } from "react";
import "./../css/SearchBox.css";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: false,
      lengthInput: 0
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onFocus() {
    this.setState({ isFocus: true });
  }

  onBlur() {
    this.setState({ isFocus: false });
  }

  onKeyUp() {
    this.setState({
      lengthInput: document.getElementById("searchInput").value.length
    });
  }

  render() {
    let { isFocus } = this.state;
    let { lengthInput } = this.state;
    const classNames = require("classnames");
    const classNameOfSearchInput = classNames({
      "out-length": lengthInput > 10
    })
    const className = classNames("search-btn", {
      active: isFocus
    });
    return (
      <div className="SearchBox">
        <input
          id="searchInput"
          className={classNameOfSearchInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyUp={this.onKeyUp}
          type="text"
          placeholder="Type something to search..."
        />
        <div className={className}>
          <a href="#">
            <img
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              width="15"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBox;
