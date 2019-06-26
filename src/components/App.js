/* eslint-disable */
import React from 'react';
import Logo from './Logo';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="Header">
          <div className="HeaderLeft">
            <div className="HeaderLogo">
              {Logo}
            </div>
            <h1 className="HeaderTitle">MAI Youth</h1>
          </div>
          <div className="HeaderRight">
            <h2 className="HeaderHome">Home</h2>
            <h2 className="HeaderArticles">Articles</h2>
            <h2 className="HeaderContact">Contact Us</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
