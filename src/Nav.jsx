import './Nav.css'

function Nav() {
    return (
        <>
            <nav className="tabstrip">
                <a className="tabs" href="index.html">Home</a>
                <a className="tabs" href="cv_transcript.html">CV&Transcript</a>
                <a className="tabs" href="projects.html">Projects</a>
                <a className="tabs" href="timeline.html">Timeline</a>
                <a className="tabs" href="blog.html">Blog</a>
            </nav>
        </>
    )
}

export default Nav
