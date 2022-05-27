import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./app.scss"
import "./app.css"
import "./normalize.scss"
import * as serviceWorker from "./serviceWorker"
import smoothscroll from "smoothscroll-polyfill"

// kick off the polyfill!
smoothscroll.polyfill()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
