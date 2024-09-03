import { useEffect } from 'react'
import './PageNotFound.css'

const title = "Page Not Found - New's"
function PageNotFound() {
    useEffect(() => { document.title = title })

    return (
        <>
            <p>Please use the navbar to navigate back to other pages.</p>
        </>
    )
}

export default PageNotFound
export const HEADER = <h1>Page Not Found!</h1>
