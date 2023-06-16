import React from 'react'
import {Row,Col} from 'react-bootstrap'
import FooterList from './subComponents/FooterList'
import { firstitems, seconditems, thirditems } from '../utils/footerApi'
const FooterComp = () => {

  
  return (
    <div className="footercomp">
        <div className="myBigContainer">
            <Row>
                <Col lg={8} className='m-auto'>
                    <Row>
                      <Col lg={7} style={{borderRight:"2px solid rgba(0.0039, 0.0471, 0.1373, 0.15)"}}>
                        <Row>
                          <Col lg={4}>
                            <h5>Products</h5>
                            <FooterList items={firstitems}/>
                          </Col>
                          <Col lg={4}>
                            <h5>Company</h5>
                            <FooterList items={seconditems}/>
                          </Col>
                          <Col lg={4}>
                            <h5>Support</h5>
                            <FooterList items={thirditems}/>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={5}>
                          <div className="fcontent">
                            <img src="./assets/images/homepage/footer/footerblackandwhitelogo.png" alt="" />

                            <div className="subheadingfooter">
                              <h2>Tristique senectus et netus et malesuada fames</h2>
                              <p>&copy;2023 Logoipsum. All rights reserved</p>
                            </div>
                          </div>
                      </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default FooterComp