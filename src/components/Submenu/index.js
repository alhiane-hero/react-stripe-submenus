import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../../context/context';
import './style.css';

function Submenu() {

    const {isSubmenuOpen, 
    page: {page, links},
    location} = useGlobalContext();
    
    const container = useRef(null);

    const [columns, serColumns] = useState('col-2');

    useEffect(_ => {
        serColumns('col-2');
        const subMneu = container.current;
        const {center, bottom} = location;
        subMneu.style.left = `${center}px`;
        subMneu.style.top = `${bottom}px`;
        if (links.length === 3) {
            serColumns('col-3')
        }
        if (links.length > 3) {
            serColumns('col-4');
        }
    }, [page, location, links]);

    return (
        <aside className={isSubmenuOpen ? 'submenu show' : 'submenu'}
            ref={container}>
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${columns}`}>{
                    links.map((link, index) => {
                        const {label, icon, url} = link;
                        return (
                            <a key={index} href={url}>
                                {icon} {label}
                            </a>
                        );
                    })
                }</div>
            </section>
        </aside>
    );
}

export default Submenu;
