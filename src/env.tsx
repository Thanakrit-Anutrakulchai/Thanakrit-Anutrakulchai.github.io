import { createContext, useEffect, useState, ReactNode } from 'react'


export const LANGS = [ "en", "thai" ] as const
export type Language = typeof LANGS[number]
export const DEFAULT_LANG : Language = "en"
export const LangCxt = createContext<Language>(DEFAULT_LANG)

import { homePage, PageInfo } from './pages.tsx'
export const PageCxt = createContext<PageInfo>(homePage)

// detecting windowsize to decide on what to display/hide
// based on this SO: 
//   https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

// helper functions for detecting different window size groups
// names are based on ones used in Bootstrap

export enum WindowSize { 
    xs,
    sm,
    md,
    lg
}

export type WindowInfo = {
    width : number,
    height : number,
    size : WindowSize
}

function windowSizeOf(dims : { width: number, height: number }) : WindowSize {
    if (dims.width < 576) {
        return WindowSize.xs
    } else if (dims.width < 768) {
        return WindowSize.sm
    } else if (dims.width < 992) {
        return WindowSize.md
    } else {
        return WindowSize.lg
    }
}

function getWindowInfo() : WindowInfo {
    const { innerWidth: width, innerHeight: height } = window;
    const dims = {
        width,
        height,
    };
    return {...dims, size: windowSizeOf(dims)}
}

function useWindowInfo() {
    const [windowInfo, setWindowInfo] = useState(getWindowInfo());

    useEffect(() => {
        function handleResize() {
            setWindowInfo(getWindowInfo());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowInfo;
}

export const WindowCxt = createContext<WindowInfo>(getWindowInfo())
export function WithWindowSize({ children } : { children : ReactNode }) {
    const windowInfo = useWindowInfo()
    return ( 
        <WindowCxt.Provider value={windowInfo}>
            {children}
        </WindowCxt.Provider>
    )
}
