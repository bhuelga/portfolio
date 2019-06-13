import React from 'react';

import Sky from './Sky/Sky';
import Header from './Header/Header';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <main>
        <Sky />
        <Header />
        <div className="spacer"></div>
        <button className="resume-button">This site is currently under construction. Come back soon, please!</button>
        <Projects />
      </main>
    </div>
  );
}

export default App;
