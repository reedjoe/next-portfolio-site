import Head from 'next/head';
import styles from '../../styles/Layout.module.css';
import Footer from './footer';
import { LayoutProps } from './layout.interface';
import Navbar from "./navbar";

const Layout = ({ children, pageTitle }: LayoutProps) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="Portfolio site description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="./favicon.ico" />
    </Head>
    <Navbar />
    <div className={styles.mainContentContainer}>
      {children}
    </div>
    <Footer />
  </>
);
export default Layout;