import React from 'react'
import { Link } from 'react-router-dom'

const FooterList = (props) => {
  return (
    <>
      <div className="footerlist">
        <ul>
          {
            props.items.map((item,key)=>{
              return(
                <li key={key}><Link to={item.link}>{item.name}</Link></li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default FooterList