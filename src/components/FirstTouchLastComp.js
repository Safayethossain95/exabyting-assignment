import React from 'react'
import {Row,Col} from 'react-bootstrap'
const FirstTouchLastComp = () => {
  return (
    <>
    <div className="firsttouch">
    <div className="myBigContainer">
        <Row>
            <Col lg={10} className='m-auto'>
                <Row>
                    <Col lg={4}>
                        <div className="subheading">
                            <h2 style={{marginBottom:"30px"}}>Consectetur <br/> adipiscing elit</h2>
                        </div>
                        <div className="paragraph">
                            <p>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim viverra</p>
                        </div>
                    </Col>
                    <Col lg={{span:6,offset:2}} className="d-flex align-items-center justify-content-between">
                        <div className="imgs">
                            <img src="./assets/images/homepage/firstthing/first.png" alt="" />
                            <img src="./assets/images/homepage/firstthing/second.png" alt="" />
                        </div>
                        <div className="circle">
                            <h3>3</h3>
                            <p>+Custom <br/> Ones</p>   
                        </div>
                    </Col>
                </Row>
            
            </Col>
        </Row>

    </div>

    </div>
    </>
  )
}

export default FirstTouchLastComp