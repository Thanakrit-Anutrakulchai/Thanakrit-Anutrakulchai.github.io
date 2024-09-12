import { useContext } from 'react'
import { Language, LangCxt } from './env.tsx'
import './Footer.css'

import github_logo from './assets/img/github-mark/github-mark.png' 

import DeterBot from './components/DeterBot.js'
// fragmenting the link to deter bots and scrapers
const EML_LINK_1 = "mai" 
const EML_LINK_2 = "lto:tanut"
const EML_LINK_3 = "rakulc"
const EML_LINK_4 = "hai@"
const EML_LINK_5 = "gma"
const EML_LINK_6 = "il.c"
const EML_LINK_7 = "om"
const EML_LINK = EML_LINK_1 + EML_LINK_2 + EML_LINK_3 + EML_LINK_4 
               + EML_LINK_5 + EML_LINK_6 + EML_LINK_7

const EML_CN_1 = "em"
const EML_CN_2 = "ail"
const EML_CN = EML_CN_1 + EML_CN_2

function Footer(props : { content? : JSX.Element }) {
    const lang = useContext(LangCxt)

    return (
        <>
            <hr />
            {props.content}
            <div className="contacts">
                <a href="https://github.com/Thanakrit-Anutrakulchai" title="github logo link">
                    <img src={github_logo} title="github logo" width={30} />
                </a>
                <a href="https://github.com/Thanakrit-Anutrakulchai" title="github word link">
                    Github
                </a>
            </div>
            {eml[lang]}
        </>
    )
}

const eml : Record<Language, JSX.Element> = {
    en: <p className={EML_CN}>
            ema<DeterBot />il: <a href={EML_LINK}>tanutra<DeterBot />
            kulchai@gm<DeterBot />ail.co<DeterBot />m</a>
        </p>,
    thai: <p className={EML_CN}>
            อี<DeterBot />เมล: <a href={EML_LINK}>tanutra<DeterBot />
            kulchai@gm<DeterBot />ail.co<DeterBot />m</a>
        </p>,
}

export default Footer
