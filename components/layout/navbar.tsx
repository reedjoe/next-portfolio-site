import styles from '../../styles/Layout.module.css';
import NavbarItem from './navbar-item';
import { INavbarItem } from './layout.interface';

const navbarItems: INavbarItem[] = [
  { id: '1', label: 'Home', href: '/' },
  { id: '2', label: 'About', href: '/about' },
  { id: '3', label: 'Projects', href: '/projects' },
  { id: '4', label: 'Contact', href: '/contact' },
];

const Navbar = () => (
  <>
    <div className={styles.navHeader}>
      <h1>Harry Lenton</h1>
      <h1>Artist</h1>
    </div>
    <div className={styles.navSticky}>
      {navbarItems.map(item => {
            return <NavbarItem key={item.id} {...item} />
        })}
    </div>
  </>
);
export default Navbar;