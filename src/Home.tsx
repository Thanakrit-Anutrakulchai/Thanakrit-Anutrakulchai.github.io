import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import hyped_screenshot from './assets/img/HYP_screenshot.png'
import './Home.css'

const EMILIE_WAPNICK_LINK = 
    'https://www.ted.com/talks/emilie_wapnick_why_some_of_us_don_t_have_one_true_calling?language=en'
const GROUP_THEORY_WIKI_LINK = 'https://en.wikipedia.org/wiki/Group_theory'
const GALOIS_THEORY_WIKI_LINK = 'https://en.wikipedia.org/wiki/galois_theory'
const CATEGORY_THEORY_WIKI_LINK = 'https://en.wikipedia.org/wiki/Category_theory'


const title = "Homepage - New's"
function Home() {
    useEffect(() => { document.title = title })

    return (
        <>
            <div className="pic-para">
                <img className="hyped" src={hyped_screenshot} />
                <div>
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
                </div>
            </div>
        </>
    )
}

export default Home
export const HEADER = <h1>Who <i>is</i> Thanakrit Anutrakulchai?</h1>
