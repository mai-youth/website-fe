import React from 'react';
import Logo from '../Logo';

export default function Header() {
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <Logo />
        <h1 className="HeaderTitle">MAI Youth</h1>
      </div>
      <div className="HeaderRight">
        <h2 className="HeaderHome">Home</h2>
        <h2 className="HeaderArticles">Articles</h2>
        <h2 className="HeaderContact">Contact Us</h2>
      </div>
    </div>
  );
}
