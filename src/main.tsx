import { ReactNode, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './index.css'

import {default as App, HEADER as AppHeader} from './App.jsx'
import {default as Projects, HEADER as ProjectsHeader , FOOTER as ProjectsFooter} from './Projects.jsx'
import {default as Timeline, HEADER as TimelineHeader} from './Timeline.jsx'
import {default as Blog, HEADER as BlogHeader} from './Blog.jsx'
import Cv_Transcript from './Cv_Transcript.jsx'

function setupPage(page : ReactNode , id : string, headerContent? : JSX.Element, footerContent? : JSX.Element) {
    let elem = document.getElementById(id)
    if (elem) {
        ReactDOM.createRoot(elem).render(
            <StrictMode>
                <Header content={headerContent} />
                {page}
                <Footer content={footerContent} />
            </StrictMode>,
        )
    }
}

setupPage(<App />, 'root', AppHeader)
setupPage(<Projects />, 'projects', ProjectsHeader, ProjectsFooter)
setupPage(<Timeline />, 'timeline', TimelineHeader)
setupPage(<Blog />, 'blog', BlogHeader)
setupPage(<Cv_Transcript />, 'cv_transcript')
