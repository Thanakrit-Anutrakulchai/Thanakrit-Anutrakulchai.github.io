import { createContext } from 'react'
export type Language = "en" | "thai"
export const DEFAULT_LANG : Language = "en"

export type Env = { lang : Language }
export const LangCxt = createContext<Language>(DEFAULT_LANG)
