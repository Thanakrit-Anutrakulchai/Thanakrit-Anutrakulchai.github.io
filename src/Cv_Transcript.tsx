import { useEffect } from 'react'
import './Cv_Transcript.css'

const title = "CV - New's"
function Cv_Transcript() {
    useEffect(() => { document.title = title })

    return (
        <>
            <h1>CV</h1>
            <p>Here is my <a href='/CV.pdf' className='internal'>CV</a> as a PDF.</p>
            <p>
                Also, here is the raw text in 
                my <a href='/CVRAW.html' className='internal'>
                    CV in HTML
                </a> format, in 
                case your device or browser does not support a PDF viewer, or if you prefer html for
                e.g. feeding to a filter.
            </p>
            {/* <p>The PDF was generated using</p> */}
            <h1>Transcript</h1>
            <p>
                Here is my <a href='/transcript.htm' className='internal'>
                    transcript
                </a> from the University of Edinburgh.
            </p>
        </>
    )
}

export default Cv_Transcript
