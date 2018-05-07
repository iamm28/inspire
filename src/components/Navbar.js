import React from 'react'
import { NavLink } from 'react-router-dom';
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div id="navbar">
      <NavLink to="/profile" exact className="nav-link right"
      activeStyle={{
        color: '#ffffff'
      }}
      >Profile </NavLink>
      <NavLink to="/signup" exact className="nav-link right"
      activeStyle={{
        color: '#ffffff'
      }}
      >Sign Up</NavLink>
    <NavLink to="/login" exact className="nav-link right"
      activeStyle={{
        color: '#ffffff'
      }}
      >Login</NavLink>
    <NavLink to="/inspiration-board" exact className="nav-link"
      activeStyle={{
        color: '#ffffff'
      }}
      >Your Inspiration</NavLink>
    <NavLink to="/audio" exact className="nav-link"
      activeStyle={{
        color: '#ffffff'
      }}
      >Music and Podcasts</NavLink>
    <NavLink to="/video" exact className="nav-link"
      activeStyle={{
        color: '#ffffff'
      }}
      >Videos</NavLink>
    <NavLink to="/quotes" exact className="nav-link"
      activeStyle={{
        color: '#ffffff'
      }}
      >Quotes</NavLink>
      <NavLink to="/images" exact className="nav-link"
        activeStyle={{
          color: '#ffffff'
        }}
        >Images and Gifs</NavLink>
    </div>
  )
}

export default Navbar;
