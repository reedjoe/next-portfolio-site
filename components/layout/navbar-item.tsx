import Link from 'next/link';
import styles from '../../styles/Layout.module.css';
import { INavbarItem } from './layout.interface';

const NavbarItem = (props: INavbarItem) => (
  <div className={styles.navItem}>
    <Link href={`${props.href}`}>{props.label}</Link>
  </div>
);
export default NavbarItem;