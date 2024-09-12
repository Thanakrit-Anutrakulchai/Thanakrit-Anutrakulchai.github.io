import Nav from './Nav.jsx'
import './Header.css'

function Header(props : { content? : JSX.Element }) {
    return (
        <div>
            <Nav />
            {props.content}
            <hr />
        </div>
    )
}

export default Header
