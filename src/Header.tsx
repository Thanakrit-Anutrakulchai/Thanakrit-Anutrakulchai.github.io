import Nav from './Nav.jsx'
import './Header.css'

function Header(props : { content : JSX.Element | undefined }) {
    return (
        <>
            <Nav />
            {props.content}
            <hr />
        </>
    )
}

export default Header
