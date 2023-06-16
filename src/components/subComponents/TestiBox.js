import React from 'react'

const TestiBox = (props) => {
  return (
    <div className="testibox">
        <div className="img">
            <img src={props.data.img} alt="" />

        </div>
            <div className="text">
                <h3>{props.data.heading}</h3>
                <p>
                {props.data.paragraph}
                </p>
            </div>
    </div>
  )
}

export default TestiBox