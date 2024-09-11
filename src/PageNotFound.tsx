import { useContext, useEffect, JSX } from 'react'

import { Language, LangCxt } from './env.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import './PageNotFound.css'

const titles : Record<Language, string> = {
    en: "Page Not Found - New's",
    thai: "หาหน้าไม่เจอ - ธนกฤต"
}
function PageNotFound() {
    const lang = useContext(LangCxt)
    useEffect(() => { document.title = titles[lang] })

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
        <Header content=<h1>หาหน้านี้ไม่เจอ!</h1> />
        <p>
            กรุณาใช้แถบนำทางเพื่อกลับไปหน้าอื่น
        </p>
        <Footer />
    </>
}

export default PageNotFound
