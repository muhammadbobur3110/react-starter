import { createContext, useState, useContext } from "react"

const LanguageContext = createContext()

function Language ({ children }) {

	const [lang, setLang] = useState("tr")
	const value = { lang, setLang, }

	return (
		<>
			<LanguageContext.Provider value={value}>
				{children}
			</LanguageContext.Provider>
		</>
	)
}

function useLanguage() {

	const { lang, setLang } = useContext(LanguageContext)

	return [lang, setLang]
}

export {
	Language,
	LanguageContext,
	useLanguage,
}
