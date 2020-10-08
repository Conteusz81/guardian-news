import React from 'react';
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import { pathNameSlice } from "../../utils/parsers";

const NavLinkItem = ({ route }) => {
    const navLinkName = route === routes.world ? '/world' : route;

    return (
        <li className="py-1">
            <NavLink to={route} className="px-4 flex justify-end border-r-4 border-white" activeClassName="font-bold border-primary">
                <span className="capitalize">{pathNameSlice(navLinkName)}</span>
            </NavLink>
        </li>
    );
};

export default NavLinkItem;