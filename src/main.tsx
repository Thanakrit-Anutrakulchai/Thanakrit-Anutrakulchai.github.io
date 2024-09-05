import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { JSX, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import './index.css'

import {default as Home, HEADER as HomeHeader} from './Home.tsx'
import {default as Projects, HEADER as ProjectsHeader , FOOTER as ProjectsFooter} from './Projects.tsx'
import {default as Timeline, HEADER as TimelineHeader} from './Timeline.tsx'
import {default as Blog, HEADER as BlogHeader} from './Blog.tsx'
import Cv_Transcript from './Cv_Transcript.tsx'
import {default as PageNotFound, HEADER as PageNotFoundHeader} from './PageNotFound.tsx'

type PageInfo = {
    id : number,
    divId : string,
    link : string,
    content : JSX.Element,
    header? : JSX.Element,
    footer? : JSX.Element,
}

let idCount = 0
const uuid = () => idCount++
const pages : PageInfo[] = [
    { id: uuid(), divId: "home", link: "/", content: <Home />, header: HomeHeader },
    { id: uuid(), divId: "projects", link: "/projects", content: <Projects />, header: ProjectsHeader, footer: ProjectsFooter },
    { id: uuid(), divId: "timeline", link: "/timeline", content: <Timeline />, header: TimelineHeader },
    { id: uuid(), divId: "blog", link: "/blog", content: <Blog />, header: BlogHeader },
    { id: uuid(), divId: "cv_transcript", link: "/cv_transcript", content: <Cv_Transcript /> },
    { id: uuid(), divId: "pagenotfound", link: "/:notfound", content: <PageNotFound />, header: PageNotFoundHeader },
]

function route(p : PageInfo) : JSX.Element {
    return <Route key={p.id} path={p.link} element={
        <div id={p.divId}>
            <Header content={p.header} />
            {p.content}
            <Footer content={p.footer} />
        </div>
    } />
}

// Append ".html" to page link. For legacy links, may remove later
function dotHtml(p : PageInfo) : PageInfo {
    return { ...p, id: uuid(), link: p.link + ".html" }
}

const pageRoutes = pages.map(route)
const legacyPageRoutes = pages.map(dotHtml).map(route)

function setupPage(id : string) {
    let elem = document.getElementById(id)
    if (elem) {
        ReactDOM.createRoot(elem).render(
            <StrictMode>
                <Router>
                    <Routes>
                        {pageRoutes}
                        {legacyPageRoutes}
                    </Routes>
                </Router>
            </StrictMode>,
        )
    }
}

setupPage('root')
