import React, { Component } from 'react';
import CategoryList from "./components/Categories.js"

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Hep B Quiz Game!</h1>
          <CategoryList />
        </div>
    )
  }
}

export default App;
