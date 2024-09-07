import { useContext, useEffect, JSX } from 'react'

import { Language, LangCxt } from './env.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import './PageNotFound.css'

const title = "Page Not Found - New's"
function PageNotFound() {
    const lang = useContext(LangCxt)
    useEffect(() => { document.title = title })

    return contents[lang]
}

const contents : Record<Language, JSX.Element> = {
    en: <>
        <Header content=<h1>Page Not Found!</h1> />
        <p>
            Please use the navbar to navigate back to other pages.
        </p>
        <Footer />
    </>,
    thai: <>
        <Header content=<h1>TODO: Translate</h1> />
        <p>
            TODO: Translate to Thai
        </p>
        <Footer />
    </>
}

export default PageNotFound
