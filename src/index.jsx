import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import App from "./App"
import data from "./data"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
const travelCard = data.map((card, i) => {
  return <App key={card.id} card={card} cardIndex={i < data.length - 1} />
})
root.render(
  <div className="jorunal">
    <Header />
    <div className="journal--wrapper">{travelCard}</div>
  </div>
)
