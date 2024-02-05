import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link href="/" className={styles.navbarLink}>Home</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/about" className={styles.navbarLink}>About</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/movies" className={styles.navbarLink}>Movies</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/contact" className={styles.navbarLink}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;