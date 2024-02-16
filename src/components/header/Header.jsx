import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [Toggle, showMenu] = useState(false)
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <>
            <header className={styles.container}>
                <nav>
                    <div className={styles.logo}>
                        <Link
                            onClick={() => handleLinkClick('/')}
                            className={styles.nav_logo}
                            to="/">
                            Adnan</Link>
                    </div>
                    <div className={`${Toggle ? `${styles.nav_menu} ${styles.show_menu}` : styles.nav_menu}`}>
                        <ul>
                            <li>
                                <Link
                                    className={`${styles.link} ${activeLink === '/' && styles.active}`}
                                    onClick={() => handleLinkClick('/')}
                                    to="/">
                                    Home</Link>
                            </li>
                            <li>
                                <Link
                                    className={`${styles.link} ${activeLink === '/servcise' && styles.active}`}
                                    onClick={() => handleLinkClick('/servcise')}
                                    to="/servcise" >
                                    Services</Link>
                            </li>
                            <li>
                                <Link
                                    className={`${styles.link} ${activeLink === '/projects' && styles.active}`}
                                    onClick={() => handleLinkClick('/projects')}
                                    to="/projects" >
                                    Projects</Link>
                            </li>
                            <li>
                                <Link
                                    className={`${styles.link} ${activeLink === '/about' && styles.active}`}
                                    onClick={() => handleLinkClick('/about')}
                                    to="/about" >
                                    About</Link></li>
                            <li>
                                <Link
                                    className={`${styles.link} ${activeLink === '/contact' && styles.active}`}
                                    onClick={() => handleLinkClick('/contact')}
                                    to="/contact" >
                                    Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.lgoin_div}>
                        <Link className={styles.link} to="/register">Sighn Up</Link>
                        <Link className={styles.link} to="/Login">Login</Link>

                        <div className={styles.nav_toggle} onClick={() => showMenu(!Toggle)}>
                            <FiAlignJustify />
                        </div>

                    </div>
                </nav>

            </header >

        </>
    )
}

export default Header