/* eslint-disable */
import React from 'react';
import Header from './Header';
import Background from './Background';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <div className="Background">
          {Background}
        </div>
        <Header />
      </div>
    )
  }
}

export default App;
