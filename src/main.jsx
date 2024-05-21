import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import App from './App.jsx'
import Projects from './Projects.jsx'
import Timeline from './Timeline.jsx'
import Blog from './Blog.jsx'
import Cv_Transcript from './Cv_Transcript.jsx'
import './index.css'

if (document.getElementById('root')) {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <Header />
            <App />
        </React.StrictMode>,
    )
}

if (document.getElementById('projects')) {
    ReactDOM.createRoot(document.getElementById('projects')).render(
        <React.StrictMode>
            <Header />
            <Projects />
        </React.StrictMode>,
    )
}

if (document.getElementById('timeline')) {
    ReactDOM.createRoot(document.getElementById('timeline')).render(
        <React.StrictMode>
            <Header />
            <Timeline />
        </React.StrictMode>,
    )
}

if (document.getElementById('blog')) {
    ReactDOM.createRoot(document.getElementById('blog')).render(
        <React.StrictMode>
            <Header />
            <Blog />
        </React.StrictMode>,
    )
}

if (document.getElementById('cv_transcript')) {
    ReactDOM.createRoot(document.getElementById('cv_transcript')).render(
        <React.StrictMode>
            <Header />
            <Cv_Transcript />
        </React.StrictMode>,
    )
}
