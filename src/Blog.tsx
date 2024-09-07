import { useContext, useEffect, JSX } from 'react'

import { Language, LangCxt } from './env.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import './Blog.css'

const title = "Blog - New's"
function Blog() {
    const lang = useContext(LangCxt)
    useEffect(() => { document.title = title })

    return contents[lang]
}

const contents : Record<Language, JSX.Element> = {
    en: <>
        <Header content=<h1>A place for me to rant into the void...</h1> />
        <p>
            There's nothing here yet! ...That is probably a good sign. Don't expect it to last.
        </p>
        <Footer />
    </>,
    thai: <>
        <Header content=<h1>TODO: Translate to Thai</h1> />
        <p>
            ตอนนี้ยังไม่มีอะไร ...ซึ่งถือว่าดี. อย่าหวังว่าจะเป็นเช่นนี้ไปตลอด.
        </p> 
        <Footer />
    </>
}

export default Blog
