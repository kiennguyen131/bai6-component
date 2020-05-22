import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import TabMenu from "./components/TabMenu.js"

function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
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
    </div>     
  );
}

export default App;
