import styles from '../../styles/Layout.module.css';
import NavbarItem from './navbar-item';
import { INavbarItem } from './navbar.interface';

const navbarItems: INavbarItem[] = [
  { id: '1', label: 'Home', href: '/' },
  { id: '2', label: 'About', href: '' },
  { id: '3', label: 'Projects', href: '' },
  { id: '4', label: 'Contact', href: '' },
];

const Navbar = () => (
    <div className={styles.navWrapper}>
      {navbarItems.map(item => {
            return <NavbarItem key={item.id} {...item} />
        })}
    </div>
  )
export default Navbar;