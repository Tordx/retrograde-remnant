import avatar_1 from '../assets/avatar_1.png'
import avatar_2 from '../assets/avatar_2.png'
import avatar_5 from '../assets/avatar_5.png'
import avatar_6 from '../assets/avatar_6.png'
import avatar_7 from '../assets/avatar_7.png'
import Eight_Bacus from '../assets/8bacus.png'
import Cyberland from '../assets/cyberland.png'
import Freelance from '../assets/Freelance.png'
import CtyStore from '../assets/ctystore.png'
import Papps from '../assets/papps.jpg'
import Sitel from '../assets/sitel.png'
import Vertere from '../assets/vertere.png'
export const IMAGES = [avatar_1, avatar_2]
export const IMAGES_ABOUT = [avatar_5, avatar_6, avatar_7]

export const EXPERIENCES: {role: string; company: string; range: string; image: any }[] = [
  {
    role: "Programmer Analyst II",
    company: "Veretere Global Solutions - Assigned to Metrobank",
    range: "January 2026 - Present",
    image: Vertere,
  },
  {
    role: "React Native Developer",
    company: "8 Bacus",
    range: "October 2024 - September 2025",
    image: Eight_Bacus,
  },
  {
    role: "Software Engineer",
    company: "Cyberland Consultancy Pte Ltd",
    range: "September 2023 - September 2024",
    image: Cyberland
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Freelance",
    range: "March 2021 - ",
    image: Freelance
  },
]

export const EXPERIENCES_UNRELATED: {role: string; company: string; range: string; image: any }[] = [
  {
    role: "Part-time Staff",
    company: "Cty Store",
    range: "February 2018 - May 2021",
    image: CtyStore,
  },
  {
    role: "Part-time Sales Representative",
    company: "Papps Delivery Services - PLDT",
    range: "September 2020 - March 2021",
    image: Papps
  },
  {
    role: "Customer Service Representative",
    company: "Sitel",
    range: "August 2016 - October 2017",
    image: Sitel
  },
]
export const NAV_ITEMS: { label: string; path: string }[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
]

export const REACH_OUT = [
  {
    icon: 'call',
    url: 'tel:+69455294315'
  },
  {
    icon: 'email',
    url: 'https://www.linkedin.com/in/rnarra/',
  },
  {
    icon: 'github',
    url: 'https://github.com/Tordx',
  },
  {
    icon: 'x',
    url: 'https://x.com/tomskaroven',
  },
  {
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/rnarra/',
  },
]