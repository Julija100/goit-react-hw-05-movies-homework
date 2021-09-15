import React from 'react';
import { NavLink } from "react-router-dom";
import style from '../Header/StyledHeader.module.css'


export default function Header() {
    return (
      <div className={style.header} component="nav">
        <ul className={style.navigationList}>
          <li>
            <NavLink className={style.homeNavigation} exact to="/">
              Home
            </NavLink>
            <NavLink className={style.moviesNavigation} to="/movies">Movies</NavLink>
          </li>
        </ul>
      </div>
    );
}