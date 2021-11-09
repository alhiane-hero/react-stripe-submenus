import React from 'react';
import phoneImg from '../../img/phone.svg';
import { useGlobalContext } from '../../context/context';
import './style.css';

function Hero() {
    const { closeSubmenu } = useGlobalContext();

    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='heroCenter'>
            <article className='heroInfo'>
                <h1>
                Payments infrastructure <br />
                for the internet
                </h1>
                <p>
                Millions of companies of all sizes—from startups to Fortune 500s—use
                Stripe’s software and APIs to accept payments, send payouts, and
                manage their businesses online.
                </p>
                <button className='Btn'>Start now</button>
            </article>
            <article className='heroImages'>
                <img src={phoneImg} className='phoneImg' alt='phone' />
            </article>
            </div>
        </section>
    );
}

export default Hero;
