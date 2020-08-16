import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import IndexContext from "./Context"
import Landing from "./Components/Pages/Landing"
import About from "./Components/Pages/About"
import Portofolio from "./Components/Pages/Items/Portofolio"
import Navbar from "./Components/Layouts/Navbar"
import Loading from "./Components/Commons/Loading"

function App() {
  const [transition, setTransition] = React.useState("mounting")
  const [active, setActive] = React.useState(1)
  const [toggleLoading, setToggleLoading] = React.useState(false)
  const contextProvider = React.useMemo(
    () => ({
      transition,
      setTransition,
      toggleLoading,
      setToggleLoading,
      active,
      setActive,
    }),
    [
      transition,
      setTransition,
      toggleLoading,
      setToggleLoading,
      active,
      setActive,
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
            <Route exact path="/portofolio" component={Portofolio} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </IndexContext.Provider>
    </Router>
  )
}

export default App
