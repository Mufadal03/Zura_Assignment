import Logo from './Icons/Logo.svg'
import Setting from './Icons/Setting.svg'
import ActiveSetting from './Icons/activeSettings.svg'
import PodcastImg from './Icons/Podcast.svg'
import {FiPlus} from 'react-icons/fi'
const Menus = [
    {
        name: 'Projects',
        link: '/project/upload',
    },
    {
        name: 'Widget Configurations',
        link: '/project/configuration',
    },
    {
        name: 'Deployment',
        link: '/',
    },
    {
        name: 'Pricing',
        link: '/',
    },
    
]

export {Logo,Menus,Setting,ActiveSetting,PodcastImg,FiPlus}