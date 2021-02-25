import { useLanguage } from "../Context/Language"
import Localization from "../../Localization"

function Header() {

  const [language, setLanguage] = useLanguage()

	const TEXT = Localization[language]

	const languageChange = e => setLanguage(e.target.value)

  return (
    <>
      <header>
				<section>
					<h1>{TEXT.welcome}</h1>
				</section>
				<section>
					<select
						defaultValue={language}
						onChange={languageChange}
					>
						<option value="en">English</option>
						<option value="ru">Русский</option>
						<option value="tr">Türkçe</option>
					</select>
				</section>
			</header>
    </>
  )
}

export default Header