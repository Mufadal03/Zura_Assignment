import Logo from './Icons/Logo.svg'
import Setting from './Icons/Setting.svg'
import ActiveSetting from './Icons/activeSettings.svg'
import PodcastImg from './Icons/Podcast.svg'
import PlusIcon from './Icons/PlusIcon.svg'
import SettingMain from './Icons/SettingMain.svg'
import Notification from './Icons/Bell-Icon.svg'
import YoutubeIcon from './Icons/YoutubeIcon.svg'
import Rss from './Icons/RssFeed.svg'
import SpotifyIcon from './Icons/SpotifyIcon.svg'
import CloudUpload from './Icons/CloudUpload.svg'
const headings = ['name', 'Upload Date & Time', 'Status', 'Actions']
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
const Platforms = [
    {
        src: YoutubeIcon,
        text:'Upload Youtube Video'
    },
    {
        src: SpotifyIcon,
        text:"Upload Spotify Podcast"
    },
    {
        src: Rss,
        text:'Upload from RSS Feed'
    },
    {
        src: YoutubeIcon,
        text: 'Upload Youtube Video'
    },
    {
        src: SpotifyIcon,
        text: "Upload Spotify Podcast"
    },
    {
        src: Rss,
        text: 'Upload from RSS Feed'
    }
]
export {Logo,Menus,Setting,ActiveSetting,PodcastImg,PlusIcon,Notification,SettingMain,Platforms,CloudUpload,headings}