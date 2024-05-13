import Style from '../../styles/Navbar.module.css'
import React, { Component } from 'react'
import Link from "next/link"
import Image from 'next/image'
import Logo from '@/public/img/logo.png'

export default class Navbar extends Component {

    render() {
        return (
            <>
                <nav className={Style.nav}>

                    <Link className={`${Style.logoLink} ${Style.logoC}`} href='/'>
                        <Image className={Style.logo} priority={true} src={Logo} loading='eager'></Image>
                        <h1 className={Style.logoDesc}>HuntingCoder</h1>
                    </Link>
                    <ul className={Style.NavUl}>
                        <li className={Style.navLi}><Link className={Style.navLink} href="/" scroll={false}>Home</Link></li>
                        <li className={Style.navLi}><Link className={Style.navLink} href="/Blog" scroll={false}>Blogs</Link></li>
                        <li className={Style.navLi}><Link className={Style.navLink} href="/About" scroll={false}>About Us</Link></li>
                        <li className={Style.navLi}><Link className={Style.navLink} href="/Contact" scroll={false}>Contact</Link></li>
                    </ul>
                    <form action="">
                        <input className={Style.search} type="text" name="Search" id="Search" />
                        <input className={Style.submit} type="submit" value="Search" />
                    </form>
                </nav>
            </>
        )
    }
}
