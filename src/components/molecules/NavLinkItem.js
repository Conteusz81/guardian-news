import React from 'react';
import { NavLink } from "react-router-dom";
import { pathNameSlice } from "../../utils/parsers";

const NavLinkItem = ({ route }) => {

    return (
        <li className="py-1">
            <NavLink
                to={route}
                className="px-4 flex justify-end border-r-4 border-white"
                activeClassName="font-bold border-primary"
            >
                <span className="capitalize">{pathNameSlice(route)}</span>
            </NavLink>
        </li>
    );
};

export default NavLinkItem;