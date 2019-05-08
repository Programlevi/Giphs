import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css';

export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <h3>
                    <Link to="/">
                        GIFS
                    </Link>
                </h3>
                <nav>
                    <ul className={styles.ul}>
                        <li>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link to='/favorites'>FAVORITES</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
