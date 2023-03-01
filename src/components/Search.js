import React from 'react'
import icons from '../ultis/icons'
const { AiOutlineSearch } = icons
const Search = () => {
    return (
        <div className='search_detail'>
            <span className='flex icon_search'><AiOutlineSearch size={24} /></span>
            <input className='search_input' type='text' placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'></input>
        </div>
    )
}

export default Search