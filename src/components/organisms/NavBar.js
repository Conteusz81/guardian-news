import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import cx from "classnames";
import {routes} from "../../routes/routes";
import { FiMenu } from 'react-icons/fi'
import NavLinkItem from "../molecules/NavLinkItem";

const NavBar = () => {
    const [isMenuHidden, setMenuVisibility] = useState(true);

    const menuListClasses = cx('text-gray-700 text-sm mt-6 md:block', {
        'hidden': isMenuHidden,
    });

    return (
        <div className="md:col-span-1 md:flex md:justify-end">
            <nav className="text-right">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                        <NavLink to={routes.home}>Guardian News</NavLink>
                    </h1>
                    <div
                        className="px-4 cursor-pointer md:hidden"
                        onClick={() => setMenuVisibility(prevState => !prevState)}
                    >
                        <FiMenu size={30} />
                    </div>
                </div>
                <ul className={menuListClasses}>
                    <NavLinkItem route={routes.world} />
                    <NavLinkItem route={routes.sport} />
                    <NavLinkItem route={routes.politics} />
                    <NavLinkItem route={routes.business} />
                </ul>

            </nav>
        </div>
    );
};

export default NavBar;
