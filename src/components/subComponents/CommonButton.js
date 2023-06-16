import React from 'react'
import { useNavigate } from 'react-router-dom'
const CommonButton = (props) => {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate(props.onclick)
    }
  return (
    <>
        <div className="commonbutton">
            <button style={props.extrastyle} onClick={handleClick} className={props.type=="active"?"active":""} type={props.linktype}>
                {props.icon!==""?<img src={props.icon} alt="" />:""} {props.name}
            </button>
        </div>
    </>
  )
}

export default CommonButton