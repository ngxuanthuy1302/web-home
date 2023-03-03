import React from 'react'
import logo from '../assets/logo.svg'
import { sidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import path from '../ultis/path'

const activeStyle = 'navbar-link active';
const notactiveStyle = 'navbar-link notactive'

const SidebarLeft = () => {
    const navigate = useNavigate()
    return (
        <div className="sidebar-left" >
            <div className='logo' onClick={() => navigate(path.HOME)}>
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