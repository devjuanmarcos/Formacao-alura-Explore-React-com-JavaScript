import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import styles from './Header.module.scss'

export default function Header () {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo do Alura Space" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text"
                placeholder="O que você procura?"/>
                <img src={search} alt="ícone de busca" />
            </div>
        </header>
    )
}