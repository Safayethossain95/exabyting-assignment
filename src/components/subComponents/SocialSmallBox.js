import React from 'react'

const SocialSmallBox = (props) => {
  return (
      <div className="smallboxi">
          <img src={props.imgurl} alt="" />
          {props.cmsoon == "true" ?
              <p>Coming Soon</p>
              :
              ""
          }
      </div>
  )
}

export default SocialSmallBox