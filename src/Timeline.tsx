import { useEffect } from 'react'
import Markdown from 'react-markdown'
import timelineMD from './assets/md/timeline.md?raw'
import './Timeline.css'

const title = "Timeline - New's"
function Timeline() {
    useEffect(() => { document.title = title })

    return (
        <>
            {/*
            *  TODO: check whether the dates are correct.
            */}
            <Markdown className="md">
                {timelineMD}
            </Markdown>
        </>
    )
}

export default Timeline
export const HEADER = <h1>How did I spend my time?</h1>
