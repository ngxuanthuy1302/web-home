import React from 'react'
import logo from '../assets/logo.svg'
import { sidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'

const activeStyle = 'navbar-link active';
const notactiveStyle = 'navbar-link notactive'

const SidebarLeft = () => {
    return (
        <div className="sidebar-left" >
            <div className='logo'>
                <img className='logo-img' src={logo} alt='logo' ></img>
            </div>
            <div className='navbar'>

                {sidebarMenu.map(item => (
                    <NavLink key={item.key} to={item.path}
                        className={({ isActive }) => isActive ? activeStyle : notactiveStyle}
                    >
                        {item.icons}
                        <span>{item.text}</span>
                    </NavLink>
                ))}

            </div>
        </div >
    )
}

export default SidebarLeft