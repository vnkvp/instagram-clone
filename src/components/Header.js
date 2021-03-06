import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import SearchIcon from '@material-ui/icons/Search';
import '../assets/Header.css'

function Header() {
    return (
        <div className='header'>
            <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2a%2FInstagram_logo.svg%2F1280px-Instagram_logo.svg.png&f=1&nofb=1'
                alt='logo' />
            <div className='header__input'>
                <SearchIcon className='header__searchicon'/>
                <input type='text' placeholder='Search' />
            </div>
            <div className='header__links'>
                <HomeRoundedIcon className='header__icon'/>
                <NearMeOutlinedIcon className='header__icon' />
                <ExploreOutlinedIcon className='header__icon' />
                <FavoriteBorderRoundedIcon className='header__icon' />
                <Avatar  />
            </div>
        </div>
    )
}

export default Header
