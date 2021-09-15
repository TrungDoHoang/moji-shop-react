import React from 'react'
import HeaderBot from './HeaderBot'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'
import './Header.css'

function Header() {
    return (
        <div>
            <HeaderTop/>
            <HeaderMid/>
            <HeaderBot/>
        </div>
    )
}

export default Header
