import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import TabMenu from "./components/TabMenu.js";
import RecommendedFriends from "./components/RecommendFriends.js";
import ListUser from "./components/ListUser.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm email="abc@example.com "/>

        <div>
          <br/>
            <h1>-------------------------------------Bai 7-------------------------------------</h1>
          <br/>
        </div>

        <TabMenu items={[
          {
            src: "https://image.flaticon.com/icons/svg/846/846449.svg",
            label: "Home"
          },
          {
            src: "https://image.flaticon.com/icons/svg/590/590474.svg",
            label: "Deals"
          },
          {
            src: "https://image.flaticon.com/icons/svg/1103/1103496.svg",
            label: "Upload"
          },
          {
            src: "https://image.flaticon.com/icons/svg/633/633652.svg",
            label: "Work"
          },
          {
            src: "https://image.flaticon.com/icons/svg/2099/2099058.svg",
            label: "Setting"
          }
        ]} />

        <div>
          <br/>
            <h1>-------------------------------------Bai 8-------------------------------------</h1>
          <br/>
        </div>
        
        <div>
          <RecommendedFriends friends={[
            {name: "nam", src:"https://loremflickr.com/50/50"},
            {name: "nam", src:"https://loremflickr.com/50/50"},
            {name: "nam", src:"https://loremflickr.com/50/50"}
          ]}/>
        </div>
  
        <div>
          <br/>
            <h1>-------------------------------------Bai 10-------------------------------------</h1>
          <br/>
        </div>
        
        <div>
          <ListUser listUser={[
            {st: 1, First: "Mark", Last: "Otto", Handle: "@mdo"},
            {st: 2, First: "Jacob", Last: "Thomton", Handle: "@fat", isEvent: true},
            {st: 3, First: "Mark", Last: "Otto", Handle: "@mdo"}
          ]}/>
        </div>


      </div>     
    );
  }
}



export default App;
