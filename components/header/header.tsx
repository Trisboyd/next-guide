import styles from '../../styles/Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Rick and Morty Characters!</h1>
            <p className={styles.subtitle}>A basic website built using NextJS and TS</p>
        </header>
    )
}

export default Header;