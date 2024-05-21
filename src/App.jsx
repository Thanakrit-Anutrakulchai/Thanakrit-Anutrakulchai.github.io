import hyped_screenshot from './assets/img/HYP_screenshot.png'
import github_logo from './assets/img/github-mark/github-mark.png' 
import './App.css'

const EMILIE_WAPNICK_LINK = 
    'https://www.ted.com/talks/emilie_wapnick_why_some_of_us_don_t_have_one_true_calling?language=en'
const GROUP_THEORY_WIKI_LINK = 'https://en.wikipedia.org/wiki/Group_theory'
const GALOIS_THEORY_WIKI_LINK = 'https://en.wikipedia.org/wiki/galois_theory'
const CATEGORY_THEORY_WIKI_LINK = 'https://en.wikipedia.org/wiki/Category_theory'

function App() {
    return (
        <>
            <h1><q>Who <i>is</i> Thanakrit Anutrakulchai?</q></h1>
            <hr />
            <div className="pic-para">
                <img src={hyped_screenshot} width={400} />
                <div>
                    <p align="left">
                        I was born in Khon Kaen, Thailand. As per Thai tradition, my mother
                        gave me a nickname of 'New', standing for the 'new millenium,' since
                        I was born in the year 2000. That is the name I prefer to be called by in 
                        English; if we work together, please refer to me as 'New', and don't worry 
                        about pronouncing my first name!
                    </p>
                    <p align="left">
                        I am a University of Edinburgh alumnus with a BSc. Honours degree in Computer
                        Science and Mathematics. Being fortunate enough to travel the world, I also
                        studied abroad in BC, Canada during highschool. 
                        The <a href='timeline.html' className='internal'>
                            timeline
                        </a> tab gives (lots) more details.
                    </p>
                    <p align="left">
                        I have 
                        a <a href={EMILIE_WAPNICK_LINK}>
                            variety of interests
                        </a>, some of which you can see from the
                        the <a href='projects.html' className='internal'>projects</a> tab. 
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
            {/*
            TODO: decide on what _todo_ about these WIP(?) sections
            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Haskell</li>
                    <li>Java</li>
                    <li>Python</li>
                </ul>
            </div>
            */}
            {/* 
                <h2> Decomposing AI use in Code </h2>
                <ol>
                    <li>Search and Filter</li>
                    <li>Code Generation</li>
                </ol>
                <h2>Weaknesses</h2>
                <p>Some of my weaknesses are...</p>
            */}
            <hr />
            <a href="https://github.com/Thanakrit-Anutrakulchai">
                <img src={github_logo} width={30} />
            </a>
            <a href="https://github.com/Thanakrit-Anutrakulchai">
                Github
            </a>
        </>
    )
}

export default App
