import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Language, LangCxt } from './env.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import hyped_screenshot from './assets/img/HYP_screenshot.png'
import './Home.css'

const EMILIE_WAPNICK_LINK = 
    'https://www.ted.com/talks/emilie_wapnick_why_some_of_us_don_t_have_one_true_calling?language=en'
const GROUP_THEORY_WIKI_LINK = 'https://en.wikipedia.org/wiki/Group_theory'
const GALOIS_THEORY_WIKI_LINK = 'https://en.wikipedia.org/wiki/galois_theory'
const CATEGORY_THEORY_WIKI_LINK = 'https://en.wikipedia.org/wiki/Category_theory'

const THAI_GROUP_THEORY_WIKI_LINK = 'https://th.wikipedia.org/wiki/%E0%B8%97%E0%B8%A4%E0%B8%A9%E0%B8%8E%E0%B8%B5%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%9B'
// This links to the wiki page on Évariste Galois, since the Galois Theory page is untranslated.
const THAI_GALOIS_THEORY_WIKI_LINK = 'https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%AD%E0%B8%A7%E0%B8%B2%E0%B8%A3%E0%B8%B4%E0%B8%AA%E0%B8%95%E0%B9%8C_%E0%B8%81%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A7'
// No thai category theory link because no relevant page is translated (afaik)


const titles : Record<Language, string> = {
    en: "Homepage - New's",
    thai: "หน้าแรก - ธนกฤต"
}
function Home() {
    const lang = useContext(LangCxt)
    useEffect(() => { document.title = titles[lang] })

    return (
        <>
            <Header content={headers[lang]} />
            <div className="pic-para">
                <img className="hyped" src={hyped_screenshot} />
                <div>
                    {contents[lang]}
                </div>
            </div>
            <Footer />
        </>
    )
}

const headers : Record<Language, JSX.Element> = {
    en: <h1>Who <i>is</i> Thanakrit Anutrakulchai?</h1>,
    thai: <h1>ใครคือ ธนกฤต อนุตระกูลชัย ?</h1>
}
const contents : Record<Language, JSX.Element> = {
    en: <>
        <p>
            I was born in Khon Kaen, Thailand. As per Thai tradition, my mother
            gave me a nickname of 'New', standing for the 'new millenium,' since
            I was born in the year 2000. That is the name I prefer to be called by;
            if we work together, please refer to me as 'New', and don't worry 
            about pronouncing my first name!
        </p>
        <p>
            I am a University of Edinburgh alumnus with a BSc. Honours degree in Computer
            Science and Mathematics. Being fortunate enough to travel the world, I also
            studied abroad in BC, Canada during highschool. 
            The <Link to='/timeline' className='internal'>
                timeline
            </Link> tab gives (lots) more details.
        </p>
        <p>
            I have 
            a <a href={EMILIE_WAPNICK_LINK}>
                variety of interests
            </a>, some of which you can see from the
            the <Link to='/projects' className='internal'>projects</Link> tab. 
            As for the other side of my degree, my maths interests mostly lie in 
            compositional descriptions of structures and systems of classification.
            Some related courses I took 
            were <a href={GROUP_THEORY_WIKI_LINK}>
                group theory
            </a> and <a href={GALOIS_THEORY_WIKI_LINK}>
                galois theory
            </a>.
            Please see my <a href='/transcript.htm' className='internal'>
                transcript
            </a> for other courses
            I took. In addition, I also self-studied basic 
            enriched <a href={CATEGORY_THEORY_WIKI_LINK}>
                category theory
            </a>,
            and used it implicitly in my undergraduate dissertation. 
            Other than that... I also enjoy a nice jog.
        </p>
    </>,
    thai: <>
        <p>
            ผมเป็นคนขอนแก่น ชื่อเล่นว่านิว เกิดมาในปีค.ศ.2000 (พ.ศ. ๒๕๔๓) ครับ ผมโชคดีได้โอกาสท่องเที่ยวโลก
            ไปเรียนที่แคนาดา ช่วงระดับปลายมัธยมศึกษา และเรียนต่อที่มหาวิทยาลัยเอดินเบอระครับ
            ผมจบปริญญาตรีด้านวิทยาการคอมพิวเตอร์ และคณิตศาสตร์ครับ ถ้าต้องการข้อมูลเพิ่ม สามารถหาได้ใน
            <Link to='/thai/timeline' className='internal'>
                หน้าไทม์ไลน์
            </Link>ครับ
        </p>
        <p>
            ผมมีความสนใจ<a href={EMILIE_WAPNICK_LINK}>
                หลายเรื่อง
            </a> โดยที่คุณสามารถเห็นตัวอย่างได้ใน<Link to='/thai/projects' className='internal'>
                หน้าผลงาน
            </Link>ครับ
            แต่สิ่งที่ไม่ค่อยแสดงในหน้านั้น คือส่วนคณิตศาสตร์ที่ผมสนใจ 
            ซึ่งรวมถึงการแยกโครงสร้างทางคณิตศาสตร์เป็นองค์ประกอบต่างๆ และระบบการแยกสิ่งเหล่านั้นเข้าสู่หมวดหมู่ต่างๆครับ
            วิชาที่ผมเรียนมา ที่เกี่ยวข้องกับเรื่องนี้ ได้แก่<a href={THAI_GROUP_THEORY_WIKI_LINK}>
                ทฤษฎีกรุป
            </a> และ<a href={THAI_GALOIS_THEORY_WIKI_LINK}>
                ทฤษฎีกาลัว
            </a>ครับ
            หากอยากรู้ว่าผมเรียนอะไรอื่นบ้าง โปรดดู<a href='/transcript.htm' className='internal'>
                ใบแสดงผลการศึกษา (Transcript)
            </a>ของผมครับ
            อีกอย่างหนึ่งคือ ผมเรียน<a href={CATEGORY_THEORY_WIKI_LINK}>
                ทฤษฎีการจัดหมวดหมู่ (category theory)
            </a>แบบประดับข้อมูลเพิ่ม (enriched) ด้วยตนเอง และใช้ความรู้นี้ในปริญญานิพนธ์ของผมครับ
            นอกจากนั้น... ผมชอบวิ่งจ็อกกิ้งด้วยครับ
        </p>
    </>
}

export default Home
