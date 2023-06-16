import React from 'react'
import {Row,Col} from 'react-bootstrap'
import TestiBox from './subComponents/TestiBox'
import { testiboxApi, testiboxApi2, testiboxApi3 } from '../utils/testiBoxApi'
const TestimoniaComp = () => {
  return (
    <>
        <div className="testicomp">
            <div className="myBigContainer">
                <Row>
                    <Col lg={10} className="m-auto">
                        <Row>
                            <Col lg={4}>
                                <TestiBox data={testiboxApi}/>

                            </Col>
                            <Col lg={4}>
                                <TestiBox data={testiboxApi2}/>

                            </Col>
                            <Col lg={4}>
                                <TestiBox data={testiboxApi3}/>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default TestimoniaComp