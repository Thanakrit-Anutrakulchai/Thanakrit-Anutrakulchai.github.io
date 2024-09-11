import { JSX, useContext, useEffect } from 'react'

import { Language, LangCxt, WindowCxt, WindowInfo, WindowSize } from './env.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import github_logo_white from './assets/img/github-mark/github-mark-white.png' 
import Markdown, { ExtraProps } from 'react-markdown'
import projectsMD from './assets/md/projects.md?raw'
import projectsMDTH from './assets/md/thai/projects.md?raw'
import './Projects.css'

import Spoiler from './components/Spoiler.js'

// Video imports for happy-birthday gifts
// NOTE: I compressed the original stars.mp4 using veed.io
// This brought it below the 100MiB github filesize limit
import cake from './assets/video/cake.mp4'
import stars from './assets/video/stars.mp4'
import formscan from './assets/video/formscan.mp4'

import sierpinski from './assets/img/fp-competition-2019.png'
import sierpinski_concave from './assets/video/sierpinski-concave.mp4'
import sierpinski_convex from './assets/video/sierpinski-convex.mp4'

import sewers from './assets/video/sewers.mp4'
import boardgame from './assets/video/boardgame.mp4'

const GITHUB_LINK = "https://github.com/Thanakrit-Anutrakulchai/"

const titles : Record<Language, string> = {
    en: "Projects - New's",
    thai: "ผลงาน - ธนกฤต"
}
function Projects() {
    const lang = useContext(LangCxt)
    const winInfo = useContext(WindowCxt)
    useEffect(() => { document.title = titles[lang] })

    return (
        <>
            <Header content={headers[lang]} />
            <Markdown 
                className="md" 
                components={{
                    p: unwrapSingleton, 
                    h2: formatHeaders, 
                    img: delegateMedia(winInfo, lang),
                    code: hideCode(winInfo)
                }}>
                {contents[lang]}
            </Markdown>
            <Footer content={footers[lang]}/>
        </>
    )
}

const headers : Record<Language, JSX.Element> = {
    en: <h1>Brief descriptions of some of my projects.</h1>,
    thai: <h1>ผลงานเก่าๆ พร้อมคำอธิบายสั้นๆ</h1>
}
const contents : Record<Language, string> = {
    en: projectsMD,
    thai: projectsMDTH
}
const footers : Record<Language, JSX.Element> = {
    en:<h1>You can find some of these projects on GitHub.</h1>,
    thai: <h1>คุณสามารถหางานพวกนี้บางงานได้บน GitHub</h1>
}

type PropOf<TagName extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[TagName]
                                                         & ExtraProps

// Hide Lua code in md if screen size is too small
const hideCode = (winInfo : WindowInfo) => (props : PropOf<"code">) : JSX.Element => {
    const {node, ...rest} = props

    if (winInfo.size < WindowSize.lg) {
        return <></>
    } else {
        return <code>
            {rest.children}
        </code>
    }
}

function formatHeaders(props : PropOf<"h2">) : JSX.Element {
    const {node, ...rest} = props
    return <h2 className="md">{rest.children}</h2>
}

// For some reason, newline-separated elements become wrapped around <p> tags.
// This ensures they are not, but also eliminates <p> tags in general.
function unwrapSingleton(props : PropOf<"p">) : JSX.Element {
    const {node, ...rest} = props
    return <>{rest.children}</>
}

// Handle media requests in .md (i.e. things of the form ![alt](src)).
// The "media" may not always be an image or a video, but also things that are
// more appropriately handled in JSX than md.
const delegateMedia = (winInfo : WindowInfo, lang : Language) => (props : PropOf<"img">) => {
    const {node, ...rest} = props

    if (rest.alt === 'sierpinski') {
        return <div className="media"><img className="small" src={sierpinski}></img></div>
    } else if (rest.alt === 'sierpinski-vids') {
        return  <div className="media">
            <video controls className="small">
                <source src={sierpinski_concave} type='video/mp4'></source>
            </video>
            <video controls className="small">
                <source src={sierpinski_convex} type='video/mp4'></source>
            </video>
        </div>
    } else if (rest.alt === 'github') {
        return <a href={GITHUB_LINK + rest.src}>
            <img src={github_logo_white} className="github-proj" />
        </a>
    } else if (rest.alt === 'bdays') {
        return <div className="media">
            <video controls className="small">
                <source src={cake} type='video/mp4'></source>
            </video>
            <video controls className="small">
                <source src={stars} type='video/mp4'></source>
            </video>
        </div>
    } else if (rest.alt === 'formscan') {
        return <div className="media">
            <video controls className="large">
                <source src={formscan} type='video/mp4'></source>
            </video>
        </div>
    } else if (rest.alt === 'sewers') {
        return <div className="media">
            <video controls className="large">
                <source src={sewers} type='video/mp4'></source>
            </video>
        </div>
    } else if (rest.alt === 'boardgame') {
        return <div className="media">
            <video controls className="large">
                <source src={boardgame} type='video/mp4'></source>
            </video>
        </div>
    } else if (rest.alt === 'QuadsSols') {
        const sol : Record<Language, string> = {
            en: "A solution:",
            thai: "มีคำตอบ:"
        }
        if (winInfo.size < WindowSize.lg) {
            return <ul>
                    <li>3, 3, 3, 5 <p>{sol[lang]}</p><p><Spoiler text="(3 * 3) + (3 * 5)" /></p></li>
                    <li>6, 8, 9, 9 <p>{sol[lang]}</p><p><Spoiler text="(9 / (9 - 6)) * 8" /></p></li>
                    <li>4, 4, 7, 7 <p>{sol[lang]}</p><p><Spoiler text="(4 - (4 / 7)) * 7" /></p></li>
                    <li>6, 8, 8, 9 <p>{sol[lang]}</p><p><Spoiler text="(8 * 9) - (8 * 6)" /></p></li>
                    <li>1, 5, 5, 5 <p>{sol[lang]}</p><p><Spoiler text="(5 - (1 / 5)) * 5" /></p></li>
            </ul>
        } else {
            return <ul>
                    <li>3, 3, 3, 5 | {sol[lang]} <Spoiler text="(3 * 3) + (3 * 5)" /></li>
                    <li>6, 8, 9, 9 | {sol[lang]} <Spoiler text="(9 / (9 - 6)) * 8" /></li>
                    <li>4, 4, 7, 7 | {sol[lang]} <Spoiler text="(4 - (4 / 7)) * 7" /></li>
                    <li>6, 8, 8, 9 | {sol[lang]} <Spoiler text="(8 * 9) - (8 * 6)" /></li>
                    <li>1, 5, 5, 5 | {sol[lang]} <Spoiler text="(5 - (1 / 5)) * 5" /></li>
            </ul>
        }
    } else {
        return <img src={rest.src}></img>
    }
}

export default Projects
