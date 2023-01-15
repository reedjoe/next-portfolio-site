import styles from '../../styles/Layout.module.css';
import Navbar from "./navbar";

const Layout = ({ children }: any) => (
    <div>
      <Navbar />
      <div className={styles.mainContentContainer}>
        {children}
      </div>
    </div>
  )
export default Layout;