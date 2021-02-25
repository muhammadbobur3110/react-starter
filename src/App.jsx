import Header from "./components/header/header"
import Main from "./components/main/main"
import Footer from "./components/footer/footer"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import News from "./components/pages/news"
import Nav from "./components/Nav/Nav"

import { Switch, Route } from "react-router-dom";

function App(){
  return(
    <>
      <Header />
      <Nav/>
      <Main>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/about" exact>
            <About/>
          </Route>

          <Route path="/news/:name" exact>
						<News />
					</Route>
        </Switch>
      </Main>
      <Footer />
    </>
    )
  }

  export default App
