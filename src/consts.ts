import { IconType } from "react-icons";
import { FaRssSquare, FaLastfmSquare, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { LuAudioLines } from "react-icons/lu";

export const githubAvatarUrl = "https://github.com/rushella.png"

export const fullname = "Vladislav Kharchenko"

export const bio = "Software Engineer with over 5 years of industry experience, skilled in both backend and frontend development."

export const projects: SectionItemValue[] = [
    {
        title: "RSS to Discord",
        desc: "Simple Reposter of RSS Feed items to Discord Webhook.",
        href: "https://github.com/rushella/RSS2Discord",
        iconType: FaRssSquare
    },
    {
        title: "LastFM Analytics",
        desc: "Tool for import and analyze LastFM users statistic.",
        href: "https://github.com/rushella/lastfm-analytics",
        iconType: FaLastfmSquare
    },
    {
        title: "JS Audio Player",
        desc: "Just a simple audio player written in pure JavaScript.",
        href: "https://github.com/rushella/js-audio-player",
        iconType: LuAudioLines
    }
];

export const links: SectionItemValue[] = [
    {
        title: "LinkedIn",
        desc: "/in/vladislav-kharchenko/",
        href: "https://www.linkedin.com/in/vladislav-kharchenko/",
        iconType: FaLinkedin
    },
    {
        title: "GitHub",
        desc: "@rushella",
        href: "https://github.com/rushella",
        iconType: FaGithub
    },
    {
        title: "Telegram",
        desc: "@VladislavKharchenko",
        href: "https://t.me/VladislavKharchenko",
        iconType: FaTelegram 
    }
];

export type SectionItemValue = {
  title: string;
  desc: string;
  href: string;
  iconType: IconType;
};