import React from 'react';
import './App.css';

import RandomUser from './components/RandomUser';

function App() {
  return (
    <div className="App">
      <RandomUser user={{ id: '1', firstName: "Tom", lastName: "Hanks" }} />
    </div>
  );
}

export default App;
