import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
    </div>     
  );
}

export default App;
