import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context/context'
import sublinks from '../../data/data';
import './style.css';

function Sidebar() {

    const {isSidebarOpen, closeSidebar} = useGlobalContext();

    return (
        <div className={isSidebarOpen ?
            'sidebar-wrapper show' : 'sidebar-wrapper'}>
            <aside className='sidebar'>
            <button className='closeBtn' onClick={closeSidebar}>
                <FaTimes />
            </button>
            <div className='sidebarLinks'>{
                sublinks.map((sublink, index) => {
                    const {page, links} = sublink;
                    return (
                        <article key={index}>
                            <h4>{page}</h4>
                            <ul className='subLinks'>{
                                links.map((link, index) => {
                                    const {label, icon, url} = link;
                                    return (
                                        <li key={index}>
                                            <a href={url}>{icon}{label}</a>
                                        </li>
                                    );
                                })
                            }</ul>
                        </article>
                    );
                })
            }</div>
            </aside>
        </div>
    );
}

export default Sidebar;
