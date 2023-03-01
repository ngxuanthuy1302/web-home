import icons from "./icons"
const { MdOutlineLibraryMusic, TbChartArcs, TfiPieChart, MdFeed } = icons

export const sidebarMenu = [
    {
        key: 1,
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        key: 2,
        path: '',
        text: 'Khám phá',
        icons: <TfiPieChart size={24} />
    },
    {
        key: 3,
        path: 'zing-chart',
        text: '#zingchart',
        icons: <TbChartArcs size={24} />
    },
    {
        key: 4,
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdFeed size={24} />
    }
]