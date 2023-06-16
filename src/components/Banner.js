import React from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import CommonButton from './subComponents/CommonButton'
const Banner = () => {
  return (
    <>
    <div className="bannermain">
        <div className="overlay">
          <div className="myBigContainer">
            <Row>
                <Col lg={6}>
                <div className="content">
                    <h1>Lore <span>ipsum.</span></h1>
                    <h1>Dolor <span>sit..</span></h1>

                    <div className="paragraph">
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde omnis iste natus error.</p>
                    </div>

                    <div className="buttons d-flex">
                        <CommonButton extrastyle={{marginRight:'24px'}} onclick="/" name="Viverra orci sagittis" type="" linktype="button"/>
                        <CommonButton icon="./assets/images/homepage/banner/vectorplay.png" onclick="/" name="Get a demo" type="active" linktype="button"/>
                    </div>
                </div>

                </Col>
            </Row>

          </div>
            
        </div>
        <Row className='mx-0'>
            <Col lg={6}>
            </Col>
            <Col lg={6}>
                <img className='w-100' src="./assets/images/homepage/banner/banner.png" alt="" />
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Banner