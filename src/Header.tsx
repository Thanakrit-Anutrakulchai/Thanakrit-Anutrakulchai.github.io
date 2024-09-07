import Nav from './Nav.jsx'
import './Header.css'

function Header(props : { content? : JSX.Element }) {
    return (
        <>
            <Nav />
            {props.content}
            <hr />
        </>
    )
}

export default Header
