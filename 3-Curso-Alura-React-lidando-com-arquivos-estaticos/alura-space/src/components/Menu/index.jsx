import React from 'react'
import styles from './Menu.module.scss'
import home from '../../assets/icones/home-ativo.png'
import curtidas from '../../assets/icones/mais-curtidas-inativo.png'
import vistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreenda from '../../assets/icones/surpreenda-me-inativo.png'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__list}>
            <li className={styles.menu__iten}>
                <img src={home} alt=""/>
                <a href='/'>Início</a>
            </li>
            <li className={styles.menu__iten}>
                <img src={curtidas} alt=''/>
                <a href='/'>Mais curtidas</a>
            </li>
            <li className={styles.menu__iten}>
                <img src={vistas} alt=''/>
                <a href='/'>Mais vistas</a>
            </li>
            <li className={styles.menu__iten}>
                <img src={novas} alt=''/>
                <a href='/'>Mais novas</a>
            </li>
            <li className={styles.menu__iten}>
                <img src={surpreenda} alt=''/>
                <a href='/'>Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
