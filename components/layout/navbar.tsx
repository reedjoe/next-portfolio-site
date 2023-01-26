import styles from '../../styles/Layout.module.css';
import NavbarItem from './navbar-item';
import { INavbarItem } from './layout.interface';
import { useState } from 'react';

const navbarItems: INavbarItem[] = [
  { id: '1', label: 'Home', href: '/' },
  { id: '2', label: 'About', href: '/about' },
  { id: '3', label: 'Projects', href: '/projects' },
  { id: '4', label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isNavExpanded, setNavExpanded] = useState(false);
  function toggleNavExpanded() {
    setNavExpanded(!isNavExpanded);
  }
  return (
    <>
      <div className={styles.navHeader}>
        <button className={styles.navToggle} onClick={toggleNavExpanded}>Toggle</button>
        <h1>Placeholder</h1>
        <h1>Artist</h1>
      </div>
      <div className={`${styles.navMain} ${isNavExpanded ? styles.navMainVisible : ''}`}>
        {navbarItems.map(item => {
          return <NavbarItem key={item.id} {...item} />
        })}
      </div>
    </>
  )
};
