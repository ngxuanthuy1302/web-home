import actionTypes from "./actionTypes";
import * as api from '../../api'

export const setCurSongId = (songid) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    songid
})
export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag
})
