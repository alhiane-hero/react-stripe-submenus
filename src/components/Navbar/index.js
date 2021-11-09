import React from 'react';
import { useGlobalContext } from '../../context/context';
import { FaBars } from 'react-icons/fa';
import Logo from '../../img/logo.svg';
import './style.css';

function Navbar() {

    const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

    const displaySubMenu = e => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2; // coordinates in (x);
        const bottom = (tempBtn.bottom - 3); // coordinates in (y);
        openSubmenu(page, {center, bottom});
    }
    const handleSubMenu = e => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu();
        }
    }

    return (
        <nav onMouseOver={handleSubMenu}>
            <div className='navCenter'>
                <header>
                    <img src={Logo} alt='logo' />
                    <button className='toggleMenu'
                        onClick={openSidebar}>
                        <FaBars />
                    </button>
                </header>
                <section className='body'>
                    <ul className='navLinks'>
                        <li>
                            <button className='link-btn'
                                onMouseOver={displaySubMenu}>
                                products
                            </button>
                        </li>
                        <li>
                            <button className='link-btn'
                                onMouseOver={displaySubMenu}>
                                developers
                            </button>
                        </li>
                        <li>
                            <button className='link-btn'
                                onMouseOver={displaySubMenu}>
                                company
                            </button>
                        </li>
                    </ul>
                </section>
                <footer>
                    <button className='btn signin-btn'>Sign in</button>
                </footer>
            </div>
        </nav>
    );
}

export default Navbar;
