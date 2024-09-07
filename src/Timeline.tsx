import { useContext, useEffect } from 'react'
import Markdown from 'react-markdown'

import Header from './Header.tsx'
import Footer from './Footer.tsx'
import { Language, LangCxt } from './env.tsx'
import timelineMD from './assets/md/timeline.md?raw'
import timelineMDTH from './assets/md/thai/timeline.md?raw'
import './Timeline.css'

const title = "Timeline - New's"
function Timeline() {
    const lang = useContext(LangCxt)
    useEffect(() => { document.title = title })

    return (
        <>
            <Header content={headers[lang]} />
            {/*
            *  TODO: check whether the dates are correct.
            */}
            <Markdown className="md">
                {contents[lang]}
            </Markdown>
            <Footer />
        </>
    )
}

const headers : Record<Language, JSX.Element> = {
    en: <h1>How did I spend my time?</h1>,
    thai: <h1>TODO: TRANSLATE</h1>
}
const contents : Record<Language, string> = {
    en: timelineMD,
    thai: timelineMDTH
}

export default Timeline
