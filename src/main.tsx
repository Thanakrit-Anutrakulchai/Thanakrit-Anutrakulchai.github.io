import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { JSX, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './index.css'

import {default as Home, HEADER as HomeHeader} from './Home.js'
import {default as Projects, HEADER as ProjectsHeader , FOOTER as ProjectsFooter} from './Projects.jsx'
import {default as Timeline, HEADER as TimelineHeader} from './Timeline.jsx'
import {default as Blog, HEADER as BlogHeader} from './Blog.jsx'
import Cv_Transcript from './Cv_Transcript.jsx'

type PageInfo = {
    id : number,
    divId : string,
    link : string,
    content : JSX.Element,
    header? : JSX.Element,
    footer? : JSX.Element,
}

const pages : PageInfo[] = [
    { id: 0, divId: "home", link: "/", content: <Home />, header: HomeHeader },
    { id: 1, divId: "projects", link: "/projects", content: <Projects />, header: ProjectsHeader, footer: ProjectsFooter },
    { id: 2, divId: "timeline", link: "/timeline", content: <Timeline />, header: TimelineHeader },
    { id: 3, divId: "blog", link: "/blog", content: <Blog />, header: BlogHeader },
    { id: 4, divId: "cv_transcript", link: "/cv_transcript", content: <Cv_Transcript /> },
    { id: 5, divId: "home", link: "/:path", content: <Home />, header: HomeHeader },
]

function route(p : PageInfo) : JSX.Element {
    return <Route path={p.link} element={
        <div id={p.divId}>
            <Header content={p.header} />
            {p.content}
            <Footer content={p.footer} />
        </div>
    } />
}

// Append ".html" to page link. For legacy links, may remove later
function dotHtml(p : PageInfo) : PageInfo {
    return { ...p, link: p.link + ".html" }
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
