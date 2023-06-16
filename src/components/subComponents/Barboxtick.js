import React from 'react'

const Barboxtick = (props) => {
  return (
    <div className="barbox d-flex align-items-center">
        <img src="./assets/images/homepage/barbox/b1.png" alt="" />
        <p>{props.text}</p>
    </div>
  )
}

export default Barboxtick