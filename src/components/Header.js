import React from 'react'
import icons from '../ultis/icons'
import Search from './Search'
const { IoIosArrowRoundBack, IoIosArrowRoundForward, AiOutlineSearch } = icons


const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <div className='next_prev flex'>
                    <div className='icon_back_next flex' >< IoIosArrowRoundBack size={28} /></div >
                    <div className='icon_back_next flex'><IoIosArrowRoundForward size={28} /></div >
                </div>
                <div className='search'><Search /></div>
            </div>
            <div className='header_right flex'>
                <div className='login'>Login</div>
            </div>
        </div >
    )
}
export default Header