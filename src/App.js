import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import IndexContext from "./Context"
import Landing from "./Components/Pages/Landing"
import About from "./Components/Pages/About"
import Portofolio from "./Components/Pages/Portofolio"
import Navbar from "./Components/Layouts/Navbar"
import Loading from "./Components/Commons/Loading"
import Experience from "./Components/Pages/Experience"
import NotFound from "./Components/Pages/NotFound"
import Content from "./Components/Pages/Content"

function App() {
  const [transition, setTransition] = React.useState("mounting")
  const [active, setActive] = React.useState(1)
  const [toggleLoading, setToggleLoading] = React.useState(false)
  const [navShown, setNavShown] = React.useState(false)
  // const [firstRender, setFirstRender] = React.useState(true)
  const contextProvider = React.useMemo(
    () => ({
      transition,
      setTransition,
      toggleLoading,
      setToggleLoading,
      active,
      setActive,
      navShown,
      setNavShown,
      // firstRender,
      // setFirstRender,
    }),
    [
      transition,
      setTransition,
      toggleLoading,
      setToggleLoading,
      active,
      setActive,
      navShown,
      setNavShown,
      // firstRender,
      // setFirstRender,
    ]
  )

  return (
    <Router>
      <IndexContext.Provider value={contextProvider}>
        <div className="App">
          <Navbar />
          {transition !== "mounted" && <Loading />}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/portofolio" component={Portofolio} />
            <Route exact path="/portofolio/:title" component={Content} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
      </IndexContext.Provider>
    </Router>
  )
}

export default App
