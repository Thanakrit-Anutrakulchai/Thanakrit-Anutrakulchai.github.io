import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { JSX, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { PageCxt, WithWindowSize } from './env.tsx'
import { getAllPages, PageInfo } from './pages.tsx'
import './index.css'

// polyfill for react-markdown
// see: https://github.com/remarkjs/react-markdown/issues/772
import 'core-js/es/object/has-own'

function route(p : PageInfo) : JSX.Element {
    return <Route key={p.id} path={p.link} element={
        <PageCxt.Provider value={p}>
            <div id={p.divId}>
                {p.content}
            </div>
        </PageCxt.Provider>
    } />
}
const pageRoutes = getAllPages().map(route)

function setupPage(id : string) {
    let elem = document.getElementById(id)
    if (elem) {
        ReactDOM.createRoot(elem).render(
            <StrictMode>
                <WithWindowSize>
                    <Router>
                        <Routes>
                            {pageRoutes}
                        </Routes>
                    </Router>
                </WithWindowSize>
            </StrictMode>,
        )
    }
}

setupPage('root')
