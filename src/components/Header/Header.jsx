import React from 'react';
import { NavLink, Route, Switch, Redirect, useParams } from "react-router-dom";


export default function Header() {
    return (
        <div component='nav'>
            <ul>
                <li>
                    <NavLink
                        exact
                        to ='/'
                    >
                        Home
                    </NavLink>
                    <NavLink
                    to ='/movies'
                    >
                        Movies
                    </NavLink>
                </li>
            </ul>
         </div>
     )
}