import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <NavLink to="/root" className={({isActive}) => (isActive ? styles.active : undefined)} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="products" className={({isActive}) => (isActive ? styles.active : undefined)}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;