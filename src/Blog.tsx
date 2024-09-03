import { useEffect } from 'react'
import './Blog.css'

const title = "Blog - New's"
function Blog() {
    useEffect(() => { document.title = title })

    return (
        <>
            <p>There's nothing here yet! ...That is probably a good sign. Don't expect it to last.</p>
        </>
    )
}

export default Blog
export const HEADER = <h1>A place for me to rant into the void...</h1>
