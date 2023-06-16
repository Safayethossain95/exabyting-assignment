import React from 'react'

const CommonTable = (props) => {
  return (
    <div className="commontable">
        <table className='w-100'>
            <thead>
                <tr>
                {
                    props.tabledata.heading.map((item,key)=>{
                        return(
                            <th key={key}>{item.head}</th>
                        )
                    })
                }
                </tr>
            </thead>
            <tbody>
                
                
                    

                    {props.tabledata.data.map((row, index) => (
                        <tr key={index}>
                          {Object.values(row).map((cell, index) => (
                            <td style={Array.isArray(cell)?{background:cell[0]}:{}} key={index}>{Array.isArray(cell)?cell[1]:cell}</td>
                          ))}
                        </tr>
                      ))}
                
                
            </tbody>
        </table>
    </div>
  )
}

export default CommonTable