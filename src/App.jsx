import React from "react"
import pin from "/map-pin.svg"

const App = (props) => {
  return (
    <>
      <div className="journal--card">
        <img className="jorunal--img" src={props.card.imageUrl} alt="" />
        <div className="journal--desc-wrapper">
          <div className="journal--location-info-wrapper">
            <img className="journal--pin" src={pin} alt="" />
            <h3 className="journal--location">{props.card.location}</h3>
            <a className="journal--map-link" href={props.card.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h2 className="journal--title">{props.card.title}</h2>
          <div className="journal--date">
            <span className="journal--start-date">{props.card.startDate}</span> -{" "}
            <span className="journal--end-date">{props.card.endDate}</span>
          </div>
          <p className="journal--desc">{props.card.description}</p>
        </div>
      </div>
      {props.cardIndex && <hr />}
    </>
  )
}

export default App
