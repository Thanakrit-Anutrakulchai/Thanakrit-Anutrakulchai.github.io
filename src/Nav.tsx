import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <>
            <nav className="tabstrip">
                <Link className="tabs" to="/">Home</Link>
                <Link className="tabs" to="/cv_transcript">CV&Transcript</Link>
                <Link className="tabs" to="/projects">Projects</Link>
                <Link className="tabs" to="/timeline">Timeline</Link>
                <Link className="tabs" to="/blog">Blog</Link>
            </nav>
        </>
    )
}

export default Nav
