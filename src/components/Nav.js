import piggy from "../porco.png";
import React from "react";

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src={piggy} className="App-logo" alt="piggy" />
        </a>
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
