import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { JSX, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { LangCxt } from './env.tsx'
import './index.css'

import {default as Home} from './Home.tsx'
import {default as Projects} from './Projects.tsx'
import {default as Timeline} from './Timeline.tsx'
import {default as Blog} from './Blog.tsx'
import Cv_Transcript from './Cv_Transcript.tsx'
import {default as PageNotFound} from './PageNotFound.tsx'

type PageInfo = {
    id : number,
    divId : string,
    link : string,
    content : JSX.Element
}

let idCount = 0
const uuid = () => idCount++
function makePage(data : Omit<PageInfo, "id">) {
    return { ...data, id: uuid() }
}


const basePages : PageInfo[] = [
    makePage({ divId: "home", link: "/", content: <Home /> }),
    makePage({ divId: "projects", link: "/projects", content: <Projects /> }),
    makePage({ divId: "timeline", link: "/timeline", content: <Timeline /> }),
    makePage({ divId: "blog", link: "/blog", content: <Blog /> }),
    makePage({ divId: "cv_transcript", link: "/cv_transcript", content: <Cv_Transcript /> }),
    makePage({ divId: "pagenotfound", link: "/:notfound", content: <PageNotFound /> }),
]

function route(p : PageInfo) : JSX.Element {
    return <Route key={p.id} path={p.link} element={
        <div id={p.divId}>
            {p.content}
        </div>
    } />
}

// Append ".html" to page link. For legacy links, may remove later
function dotHtml(p : PageInfo) : PageInfo {
    return { ...p, id: uuid(), link: p.link + ".html" }
}

// Get the thai version of a page
function thaiVersion(p : PageInfo) : PageInfo {
    return { ...p, 
        id: uuid(), link: "/thai" + p.link,
        content: <LangCxt.Provider value="thai">{p.content}</LangCxt.Provider>
    }
}

const legacyPages = basePages.map(dotHtml)
const thaiPages   = basePages.concat(legacyPages).map(thaiVersion)
const allPages = basePages.concat(legacyPages).concat(thaiPages)
const pageRoutes  = allPages.map(route)

function setupPage(id : string) {
    let elem = document.getElementById(id)
    if (elem) {
        ReactDOM.createRoot(elem).render(
            <StrictMode>
                <Router>
                    <Routes>
                        {pageRoutes}
                    </Routes>
                </Router>
            </StrictMode>,
        )
    }
}

setupPage('root')
