import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './index.css'

import {default as App, HEADER as AppHeader} from './App.jsx'
import {default as Projects, HEADER as ProjectsHeader , FOOTER as ProjectsFooter} from './Projects.jsx'
import {default as Timeline, HEADER as TimelineHeader} from './Timeline.jsx'
import {default as Blog, HEADER as BlogHeader} from './Blog.jsx'
import Cv_Transcript from './Cv_Transcript.jsx'

function setupPage(page, id, headerContent, footerContent) {
    if (document.getElementById(id)) {
        ReactDOM.createRoot(document.getElementById(id)).render(
            <React.StrictMode>
                <Header content={headerContent} />
                {page}
                <Footer content={footerContent} />
            </React.StrictMode>,
        )
    }
}

setupPage(<App />, 'root', AppHeader)
setupPage(<Projects />, 'projects', ProjectsHeader, ProjectsFooter)
setupPage(<Timeline />, 'timeline', TimelineHeader)
setupPage(<Blog />, 'blog', BlogHeader)
setupPage(<Cv_Transcript />, 'cv_transcript')
