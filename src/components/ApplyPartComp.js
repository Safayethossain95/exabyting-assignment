import React from 'react'
import {Row,Col} from 'react-bootstrap'
import CommonButton from './subComponents/CommonButton'
const ApplyPartComp = () => {
  return (
    <>
        <div className="applypartcomp">
            <div className="myBigContainer">
                <Row>
                    <Col lg={10} className='m-auto'>
                        <Row>
                            <Col lg={7}>
                                <div className="subheading">
                                    <h2 style={{marginBottom:"30px"}}>Ullamcorper morbi tincidunt <br/> ornare massa eget</h2>
                                </div>
                                <div className="paragraph">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                </div>
                            </Col>
                            <Col lg={5} className="d-flex align-items-center justify-content-end">
                            <CommonButton icon="" extrastyle={{padding:"20px 70px",fontSize:"30px"}} onclick="/" name="Apply" type="active" linktype="button"/>
                            </Col>
                        </Row>
                    
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default ApplyPartComp