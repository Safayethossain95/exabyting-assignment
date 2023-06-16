import React from 'react'
import {Row,Col} from 'react-bootstrap'
import CommonTable from './subComponents/CommonTable'
import { adReportFirstTableApi } from '../utils/tableApi'
const AdReportComp = () => {
  return (
    <>
        <div className="adreportcomp">
            <div className="myBigContainer">
                <Row className='mx-0'>
                    <Col lg={8} className='m-auto'>
                        <div className="subheading">
                        <h2 className='text-center'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</h2>
                            
                        </div>
                    </Col>
                </Row>

                <CommonTable tabledata={adReportFirstTableApi}/>
            </div>
            
        </div>
    </>
  )
}

export default AdReportComp