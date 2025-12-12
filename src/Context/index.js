import React from "react"

export default React.createContext({
  active: 1,
  modalShow: false,
  modalSrc: "",
  navShown: false,
  toggleLoading: false,
  transition: false,
  language: "en",
  setActive: () => {},
  setModalShow: () => {},
  setModalSrc: () => {},
  setNavShown: () => {},
  setToggleLoading: () => {},
  setTransition: () => {},
  setLanguage: () => {},
})
