import "./Nav.css"
// import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom"

function Nav () {

	const history = useHistory()

	return (
		<>
			<nav>
				<ul>
					<li>
						<button onClick={() => history.push("/")}>Home</button>
					</li>
					<li>
						<button onClick={() => history.push("/about")}>About</button>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Nav
