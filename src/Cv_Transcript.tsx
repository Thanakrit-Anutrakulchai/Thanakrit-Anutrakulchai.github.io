import { useContext, useEffect } from 'react'

import { Language, LangCxt } from './env.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import './Cv_Transcript.css'

const titles : Record<Language, string> = {
    en: "CV - New's",
    thai: "ประวัติการเรียน - ธนกฤต"
}
function Cv_Transcript() {
    const lang = useContext(LangCxt)
    useEffect(() => { document.title = titles[lang] })

    return <>
        <Header />
        {contents[lang]}
        <Footer />
    </>
}

const contents : Record<Language, JSX.Element> = {
    en: 
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
        </>,
    thai:
        <>
            <h1>CV</h1>
            <p>สามารถหา <a href='/CV.pdf' className='internal'>CV เป็น PDF</a> ได้ที่นี่ </p>
            <p>
                หากต้องการ
                สามารถใช้ <a href='/CVRAW.html' className='internal'>
                    CV เป็น html
                </a> เผื่ออุปกรณ์ของคุณไม่สามารถเปิดไฟล์ PDF หรือหากคุณต้องการข้อมูลเพื่อนำไปป้อนโปรแกรมคัดกรอง
            </p>
            {/* <p>The PDF was generated using</p> */}
            <h1>ใบแสดงผลการศึกษา (Transcript)</h1>
            <p>
                สามารถหา <a href='/transcript.htm' className='internal'>
                    ใบแสดงผลการศึกษา
                </a> จากมหาวิทธยาลัยเอดินเบอระได้ที่นี่
            </p>
        </>
}

export default Cv_Transcript
