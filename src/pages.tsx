import { LangCxt, ThemeCxt, THEMES, Theme } from './env.tsx'

import {default as Home} from './Home.tsx'
import {default as Projects} from './Projects.tsx'
import {default as Timeline} from './Timeline.tsx'
import {default as Blog} from './Blog.tsx'
import Cv_Transcript from './Cv_Transcript.tsx'
import {default as PageNotFound} from './PageNotFound.tsx'

export type PageInfo = {
    id : number,
    divId : string,
    baseLink : string, // page link without extraneous data encoded (e.g. language)
    link : string,
    content : JSX.Element
}

let idCount = 0
const uuid = () => idCount++
function makePage(data : Omit<PageInfo, "id" | "baseLink">) {
    return { ...data, id: uuid(), baseLink: data.link }
}

export const homePage : PageInfo = makePage({ divId: "home", link: "/", content: <Home /> })
export const basePages : PageInfo[] = [
    homePage,
    makePage({ divId: "projects", link: "/projects", content: <Projects /> }),
    makePage({ divId: "timeline", link: "/timeline", content: <Timeline /> }),
    makePage({ divId: "blog", link: "/blog", content: <Blog /> }),
    makePage({ divId: "cv_transcript", link: "/cv_transcript", content: <Cv_Transcript /> }),
    makePage({ divId: "pagenotfound", link: "/*", content: <PageNotFound /> }),
]

// Append ".html" to page link. For legacy links, may remove later
function dotHtml(p : PageInfo) : PageInfo {
    return { ...p, id: uuid(), link: p.link + ".html" }
}

// Get the thai version of a page
function thaiVersion(p : PageInfo) : PageInfo {
    return { ...p, 
        id: uuid(), link: "/thai" + p.link,
        content: <LangCxt.Provider value="thai">{p.content}</LangCxt.Provider>
    }
}

const withTheme = (theme : Theme) => (p : PageInfo) => {
    return { ...p,
        id: uuid(), link: "/" + theme + p.link,
        content: <ThemeCxt.Provider value={theme}>{p.content}</ThemeCxt.Provider>
    }
}

// This is a function to defer calling LangCxt.Provider, 
// which requires LangCxt to be instantiated first.
export function getAllPages() {
    const themedPages = THEMES.flatMap((t) => basePages.map(withTheme(t)))
    const legacyPages = basePages.map(dotHtml)
    const thaiPages   = basePages.concat(legacyPages).map(thaiVersion)
    return basePages.concat(legacyPages).concat(thaiPages)
}
