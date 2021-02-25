import { useParams } from "react-router-dom"

function News () {

	const { name } = useParams()

	return (
		<>
			{name} ga oid yangilik.
		</>
	)
}

export default News