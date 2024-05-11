import Style from '../../styles/Navbar.module.css'
import React, { Component } from 'react'
import Link from "next/link"
import Image from 'next/image'
import Logo from '@/public/logo.png'

export default class Navbar extends Component {


    render() {
        return (
            <>
                <nav className={Style.nav}>
                    <div className={Style.logoC}>
                        <Link href='/'><Image className={Style.logo} priority={true} src={Logo} loading='eager'></Image></Link>
                    </div>
                    <ul className={Style.NavUl}>
                        <li className={Style.navLi}><Link className={Style.navLink} href="/" scroll={false}>Home</Link></li>
                        <li className={Style.navLi}><Link className={Style.navLink} href="/blog" scroll={false}>Blogs</Link></li>
                        <li className={Style.navLi}><Link className={Style.navLink} href="/about" scroll={false}>About Us</Link></li>
                        <li className={Style.navLi}><Link className={Style.navLink} href="/contact" scroll={false}>Contact</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}
