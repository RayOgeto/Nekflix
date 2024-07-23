import React from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Row from './components/row';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl="URL_FOR_NETFLIX_ORIGINALS" />
      <Row title="Trending Now" fetchUrl="URL_FOR_TRENDING" />
      <Row title="Top Rated" fetchUrl="URL_FOR_TOP_RATED" />
      <Row title="Action Movies" fetchUrl="URL_FOR_ACTION_MOVIES" />
      <Row title="Comedy Movies" fetchUrl="URL_FOR_COMEDY_MOVIES" />
      <Row title="Horror Movies" fetchUrl="URL_FOR_HORROR_MOVIES" />
      <Row title="Romance Movies" fetchUrl="URL_FOR_ROMANCE_MOVIES" />
      <Row title="Documentaries" fetchUrl="URL_FOR_DOCUMENTARIES" />
    </div>
  );
}

export default App;
