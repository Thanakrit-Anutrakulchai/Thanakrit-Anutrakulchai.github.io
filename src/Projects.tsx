import { JSX, useEffect } from 'react'
import github_logo_white from './assets/img/github-mark/github-mark-white.png' 
import Markdown, { ExtraProps } from 'react-markdown'
import projectsMD from './assets/md/projects.md?raw'
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

type PropOf<TagName extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[TagName]
                                                         & ExtraProps

function delegateMedia(props : PropOf<"img">) {
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
    } else if (typeof(rest.alt) === 'string' && rest.alt.substring(0, 8) === 'spoiler:') {
        return <Spoiler text={rest.alt.substring(8).trim()}/>
    } else {
        return <img src={rest.src}></img>
    }
}

function formatHeaders(props : PropOf<"h2">) : JSX.Element {
    const {node, ...rest} = props
    return <h2 className="md">{rest.children}</h2>
}

// for some reason, newline-separated elements become wrapped around <p> tags
// this ensures they are not, but also eliminates <p> tags in general
function unwrapSingleton(props : PropOf<"p">) : JSX.Element {
    const {node, ...rest} = props
    return <>{rest.children}</>
}

const title = "Projects - New's"
function Projects() {
    useEffect(() => { document.title = title })

    return (
        <>
            <Markdown 
                className="md" 
                components={{p: unwrapSingleton, h2: formatHeaders, img: delegateMedia}}>
                {projectsMD}
            </Markdown>
        </>
    )
}

export default Projects
export const HEADER = <h1>Brief descriptions of some of my projects.</h1>
export const FOOTER = <h1>You can find some of these projects on GitHub.</h1>
