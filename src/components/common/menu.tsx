import React, { ReactElement, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from './modal';

export const Menu = ():ReactElement => {

    const [ open, setOpen ] = useState( false );

    return (
        <header className="menu">
            <nav className="menu__nav">
                <NavLink to="/" className="menu__nav--link">Main page</NavLink>
                <NavLink to="/posts/" className="menu__nav--link">All posts</NavLink>
                <button className="menu__nav--button" onClick={ () => setOpen( true )}>Create New Post</button>
                {
                    open
                        ? <Modal onClose={ () => setOpen( false )}/>
                        : null
                }
            </nav>
        </header>
    )

}