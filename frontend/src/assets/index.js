import Logo from "./Icons/Logo.svg";
import Setting from "./Icons/Setting.svg";
import ActiveSetting from "./Icons/activeSettings.svg";
import PodcastImg from "./Icons/Podcast.svg";
import PlusIcon from "./Icons/PlusIcon.svg";
import SettingMain from "./Icons/SettingMain.svg";
import Notification from "./Icons/Bell-Icon.svg";
import YoutubeIcon from "./Icons/YoutubeIcon.svg";
import Rss from "./Icons/RssFeed.svg";
import SpotifyIcon from "./Icons/SpotifyIcon.svg";
import CloudUpload from "./Icons/CloudUpload.svg";
import SearchIcon from "./Icons/Search.svg";
import EditIcon from './Icons/editIcon.svg'
import CrossIcon from "./Icons/CrossIcon.svg";
const headings = ["name", "Upload Date & Time", "Status", "Actions"];
const Menus = [
    {
        name: "Projects",
        link: "/project/upload",
    },
    {
        name: "Widget Configurations",
        link: "/project/configuration",
    },
    {
        name: "Deployment",
        link: "/",
    },
    {
        name: "Pricing",
        link: "/",
    },
];
const Platforms = [
    {
        src: YoutubeIcon,
        text: "Upload Youtube Video",
    },
    {
        src: SpotifyIcon,
        text: "Upload Spotify Podcast",
    },
    {
        src: Rss,
        text: "Upload from RSS Feed",
    },
    {
        src: YoutubeIcon,
        text: "Upload Youtube Video",
    },
    {
        src: SpotifyIcon,
        text: "Upload Spotify Podcast",
    },
    {
        src: Rss,
        text: "Upload from RSS Feed",
    },
];

function calculateTimeDifferenceWithIST(utcDate) {
    // Convert UTC time to IST
    const istDateTime = new Date(utcDate);
    // Calculate the time difference in milliseconds
    const currentTime = new Date();
    const timeDifference = currentTime - istDateTime;

    // Convert milliseconds to seconds, minutes, hours, etc.
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Return a formatted relative time difference
    if (days > 0) {
        return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (seconds > 0) {
        return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    } else {
        return "Just now";
    }
}

function changeDateFormat(utcDate) {
    const date = new Date(utcDate);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear().toString().slice(-2); // Extract the last two digits of the year
    const hours = date.getHours().toString().padStart(2, "0"); // Ensure two digits with leading zero
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensure two digits with leading zero

    // Format the date string
    return `${day} ${month} ${year} | ${hours}:${minutes}`;
}
export {
    EditIcon,
    Logo,
    Menus,
    Setting,
    ActiveSetting,
    PodcastImg,
    PlusIcon,
    Notification,
    SettingMain,
    Platforms,
    CloudUpload,
    headings,
    calculateTimeDifferenceWithIST,
    changeDateFormat,
    SearchIcon,
    YoutubeIcon,
    CrossIcon,
};
