import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import * as api from '../api'
import icons from '../ultis/icons'

const { IoMdPause, BiDotsHorizontalRounded, AiOutlineHeart, MdSkipNext, MdSkipPrevious, CiRepeat, IoShuffleOutline, IoMdPlay } = icons

const Player = () => {
    const { curSongId, isPlaying } = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)
    const [source, setSource] = useState(null)
    const AudioEI = new Audio()

    const handlePlaying = () => {

    }
    console.log(isPlaying)
    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                api.apiGetDetailSong(curSongId),
                api.apiGetSong(curSongId)
            ])
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
            }
            if (res2.data.err === 0) {
                setSource(res2.data.data['128'])
            }
        }
        fetchDetailSong()
    }, [curSongId])

    return (
        <div className='player'>
            <div className='detail_song'>
                <img src={songInfo?.thumbnail} alt={songInfo?.title} className='img_detailsong'></img>
                <div className='info_detaill'>
                    <span className='title_detail'>{songInfo?.title}</span>
                    <span className='artis_detail'>{songInfo?.artistsNames}</span>
                </div>
                <div className='icon_detail'>
                    <span className='flex icon_de'><AiOutlineHeart size={16} /></span>
                    <span className='flex icon_de'><BiDotsHorizontalRounded size={16} /></span>
                </div>
            </div>
            <div className='main_player'>
                <div className='control_icon'>
                    <span className='flex icon_mp' title='Bật phát ngẫu nhiên'><IoShuffleOutline size={24} /></span>
                    <span className='flex icon_mp'><MdSkipPrevious size={24} /></span>
                    <span className='flex icon_mp play_icon' onClick={handlePlaying}>
                        {isPlaying ? <IoMdPause size={16} /> : <IoMdPlay size={16} />}
                    </span>
                    <span className='flex icon_mp'><MdSkipNext size={24} /></span>
                    <span className='flex icon_mp' title='Bật phát lại tất cả'><CiRepeat size={24} /></span>
                </div>
            </div>
            <div className='volumne'>
                Volumne
            </div>
        </div>
    )
}

export default Player