import './App.css';

import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from './fish.png';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="body">
          <Button style={{ width: '100px', marginRight: '100px' }} type="primary">
            <Link to="/todoList">TodoList</Link>
          </Button>
          <Button type="primary">
            <Link to="/about">About</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
