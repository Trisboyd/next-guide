import React from "react"
import styles from '../styles/Layout.module.css';
import Link from "next/link";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <Link href={'/'}>
                    <li className={styles.home}>Home</li>
                </Link>
            </nav>
            {children}
        </div>
    )
}

export default Layout