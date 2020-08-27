import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import IndexContext from "./Context"
import Landing from "./Components/Pages/Landing"
import About from "./Components/Pages/About"
import Portofolio from "./Components/Pages/Portofolio"
import Navbar from "./Components/Layouts/Navbar"
import StickyNav from "./Components/Layouts/StickyNav"
import Loading from "./Components/Commons/Loading"
import Experience from "./Components/Pages/Experience"
import NotFound from "./Components/Pages/NotFound"
import Content from "./Components/Pages/Content"
import Contact from "./Components/Pages/Contact"

// Utils
import useCurrentWidth from "./Components/Utils/GetWidth"

function App() {
  const [transition, setTransition] = React.useState("mounting")
  const [active, setActive] = React.useState(1)
  const [toggleLoading, setToggleLoading] = React.useState(false)
  const [navShown, setNavShown] = React.useState(false)
  const width = useCurrentWidth()
  const contextProvider = React.useMemo(
    () => ({
      active,
      setActive,
      navShown,
      setNavShown,
      toggleLoading,
      setToggleLoading,
      transition,
      setTransition,
      width,
    }),
    [
      active,
      setActive,
      navShown,
      setNavShown,
      toggleLoading,
      setToggleLoading,
      transition,
      setTransition,
      width,
    ]
  )

  return (
    <Router>
      <IndexContext.Provider value={contextProvider}>
        <div className="App">
          <Navbar />
          {width <= 576 && <StickyNav />}
          {transition !== "mounted" && <Loading />}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/portofolio" component={Portofolio} />
            <Route exact path="/portofolio/:title" component={Content} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
      </IndexContext.Provider>
    </Router>
  )
}

export default App
