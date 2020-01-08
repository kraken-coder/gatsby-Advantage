import React from "react"
import { Link } from "gatsby"
const Card = props => {
  return (
    <div className="card" style={{
        width: '30%'
    }}>
      <img src={props.img} className="card-img-top" alt="card_img" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="lead">{props.text}</p>
        <Link to={props.link} className="btn btn-sm btn-primary">
          {props.btnText}
        </Link>
      </div>
    </div>
  )
}

export default Card
