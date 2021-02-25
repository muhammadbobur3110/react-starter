import { useLanguage } from "../Context/Language"
import Localization from "../../Localization"

function Footer () {

	const [Language] = useLanguage()
	const TEXT = Localization[Language]

	return (
		<>
			<footer>
				<p>{TEXT.copyright}</p>
			</footer>
		</>
	)
}

export default Footer
