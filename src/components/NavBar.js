import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const NavBar = () => {

    const [miniMenu, setMiniMenu] = useState(false);

    const displayMiniMenu = () => {
        setMiniMenu(!miniMenu);
        console.log(miniMenu)
    }

    return  <>
                <div className='navbar'>
                    <img src='./images/logo.png' alt='logo' className='logo'/>
                    <div className='navListBtn'>
                        <ul className='navList'>
                            <li className='listItem'>
                                <NavLink exact to="/" activeclassname="nav-active" className='navItem'>
                                    Home
                                </NavLink>
                            </li>
                            <li className='listItem'>
                                <NavLink exact to="/services" activeclassname="nav-active" className='navItem'>
                                    Services
                                </NavLink>                      
                            </li>
                            <li className='listItem'>
                                <NavLink exact to="/products" activeclassname="nav-active" className='navItem'>
                                    Products
                                </NavLink> 
                            </li>
                            <li className='listItemBtn'>
                                <NavLink exact to="/signup" activeclassname="nav-active">
                                    <Button textBtn='SIGN UP' btnClass='emptyBtn'/>
                                </NavLink>
                            </li>
                        </ul>
                        <div>
                            <svg onClick={displayMiniMenu} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="menu bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            <svg onClick={displayMiniMenu} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="close bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                { 
                    miniMenu && (
                        <div className={'navbarMini '+ miniMenu}>
                            <ul className='navListMini'>
                                <NavLink onClick={displayMiniMenu} exact to="/" activeclassname="nav-active" className='navItem'>
                                    <li className='listItem'>
                                            Home
                                    </li>
                                </NavLink>
                                <NavLink onClick={displayMiniMenu} exact to="/services" activeclassname="nav-active" className='navItem'>
                                    <li className='listItem'>
                                            Services
                                    </li>
                                </NavLink>                      
                                <NavLink onClick={displayMiniMenu} exact to="/products" activeclassname="nav-active" className='navItem'>
                                    <li className='listItem'>
                                            Products
                                    </li>
                                </NavLink> 
                                <NavLink onClick={displayMiniMenu} exact to="/signup" activeclassname="nav-active">
                                    <li className='listItemBtn'>
                                            <Button textBtn='SIGN UP' btnClass='emptyBtn'/>
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                    )
                }
            </>;
};

export default NavBar;
