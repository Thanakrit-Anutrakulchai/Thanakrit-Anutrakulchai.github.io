import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Language, LangCxt } from './env.tsx'
import './Nav.css'

type LinkInfo = { id: number, link: string, displayName: string }

let idCount = 0
const uuid = () => idCount++
const links : Record<Language, LinkInfo[]> = {
    en: [
        { id: uuid(), link: "/", displayName: "Home" },
        { id: uuid(), link: "/cv_transcript", displayName: "CV&Transcript" },
        { id: uuid(), link: "/projects", displayName: "Projects" },
        { id: uuid(), link: "/timeline", displayName: "Timeline" },
        { id: uuid(), link: "/blog", displayName: "Blog" }
    ],
    thai: [
        { id: uuid(), link: "/thai/", displayName: "หน้าแรก" },
        { id: uuid(), link: "/thai/cv_transcript", displayName: "ประวัติการเรียน" },
        { id: uuid(), link: "/thai/projects", displayName: "ผลงาน" },
        { id: uuid(), link: "/thai/timeline", displayName: "ไทม์ไลน์" },
        { id: uuid(), link: "/thai/blog", displayName: "บล็อก" }
    ]
}

function Nav() {
    const lang = useContext(LangCxt)

    return (
        <>
            <nav className="tabstrip">
            {
                links[lang].map(info => 
                    <Link key={info.id} className="tabs internal" to={info.link}>
                        {info.displayName}
                    </Link>
                )
            }
            </nav>
        </>
    )
}

export default Nav
