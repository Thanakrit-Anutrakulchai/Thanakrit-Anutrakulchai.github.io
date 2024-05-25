import {useState} from 'react'
import './Spoiler.css'

function Spoiler(props) {
    const [isRevealed, setReveal] = useState('hidden');
    function handleClick() {
        setReveal('revealed')
    }


    return (
        <>
            {/* 
                using <em> instead of <p> so it stays on the same line when the
                Markdown <p>-component handler peels off enclosing <p>

                This is a hack.
            */}
            <em onClick={handleClick} className={isRevealed}>
                {props.text}
            </em>
        </>
    )
}

export default Spoiler

