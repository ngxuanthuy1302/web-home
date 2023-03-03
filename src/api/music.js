import axios from "../axios";

export const apiGetSong = (songid) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/song',
            method: 'get',
            params: { id: songid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetDetailSong = (songid) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/infosong',
            method: 'get',
            params: { id: songid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apigetDetailPlaylist = (pid) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/detailplaylist',
            method: 'get',
            params: { id: pid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})