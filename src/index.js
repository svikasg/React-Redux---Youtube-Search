import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyAOJ3usoBk6PjjAh2IJywTPfcdVK7huV4E';


const App = () => {
  return <div>
    Hi There! <br />
    <SearchBar />
  </div>;
};


ReactDOM.render(<App />, document.querySelector('.container'));
