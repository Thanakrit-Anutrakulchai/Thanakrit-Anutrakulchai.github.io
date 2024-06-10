import Nav from './Nav.jsx'
import './Header.css'

function Header(props) {
    return (
        <>
            <Nav />
            {props.content}
            <hr />
        </>
    )
}

export default Header
