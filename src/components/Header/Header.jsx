import React from 'react'
import styles from './Header.module.scss'

import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigation =useNavigate()
  return (
<header>
    <div className={styles.container}>
        <div className={styles.logo}>
            <h2>VILLA</h2>
        </div>
        <div className={styles.nav}>
            <ul>
                <li><a href=""onClick={()=>{
                    navigation('/') }}>Home</a></li>
                <li><a href=""onClick={()=>{
                    navigation('/Basket')}}>Basket</a></li>

                <li><a href="" onClick={()=>{
                    navigation('/Wishlist')  }}>Wish</a></li>
                <li><a href="" onClick={()=>{
                    navigation('/admin')  }}>Admin</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Program</a></li>
            </ul>
        </div>
        <div className={styles.bars}>
        <FaBars />
        </div>
    </div>
</header>
  )
}

export default Header