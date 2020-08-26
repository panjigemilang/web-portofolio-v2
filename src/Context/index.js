import React from "react"

export default React.createContext({
  active: 1,
  navShown: false,
  toggleLoading: false,
  transition: false,
  setActive: () => {},
  setNavShown: () => {},
  setToggleLoading: () => {},
  setTransition: () => {},
})
