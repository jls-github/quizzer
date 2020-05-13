import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz'

function App() {
  return (
    <div className="App">
      <h1>Quizzer</h1>
      <h4>The Million Dollar App that lets you take really fire React Quizzes</h4>
      <Quiz />
    </div>
  );
}

export default App;
