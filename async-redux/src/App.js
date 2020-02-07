import React from 'react';
import './App.css';
import AnimeList from './components/AnimeList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AnimeList />
    </div>
  );
}

export default App;
