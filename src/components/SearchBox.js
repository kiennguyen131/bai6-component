import React, { Component } from 'react';
import "./../css/SearchBox.css";

class SearchBox extends Component{
    constructor() {
        super();
        this.state = {
          isFocused: false
        };
      }
      render() {
        return (
          <div className="SearchBox">

              <input
                onFocus={() => this.setState({ isFocused: true })}
                onBlur={() => this.setState({ isFocused: false })}
                type="text"
                placeholder="Type something to search..."
              />
              {!this.state.isFocused && (
                <button>
                  <img src="https://cdn.glitch.com/44747202-fcc0-49dd-b4d1-e9c208ad632f%2Fmagnifying-glass.png?v=1588755021698" />
                </button>
              )}

          </div>
        );
      }
    }

export default SearchBox;