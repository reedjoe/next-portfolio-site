import styles from '../../styles/Layout.module.css';
import { INavbarItem } from './navbar.interface';

const NavbarItem = (props: INavbarItem) => (
    <div className={styles.navItem}>
      <a href={props.href}>{props.label}</a>
    </div>
  )
export default NavbarItem;