import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Barboxtick from './subComponents/Barboxtick'
import CommonButton from './subComponents/CommonButton'
const TryOutNowComp = () => {
  return (
    <>
        <div className="trycomp">
            <div className="myBigContainer">
                <Row>
                    <Col lg={6}>
                        <div className="subheading">
                            <h2 style={{marginBottom:"25px"}}>Nemo enim ipsam quia</h2>
                        </div>
                        <div className="paragraph">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu nemo enim</p>
                        </div>
                        <Barboxtick text="Sed ut perspiciatis unde"/>
                        <Barboxtick text="Omnis iste natus"/>
                        <Barboxtick text="Error sit voluptatem"/>
                        <Barboxtick text="Accusantium doloremque"/>
                        <CommonButton icon="" extrastyle={{marginTop:'50px'}} onclick="/aboutus" name="Try Out Now!" type="active" linktype="button"/>
                    </Col>
                    <Col lg={6} className='d-flex align-items-center'>
                        <img className='w-100' src="./assets/images/homepage/barbox/testiright.png" alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default TryOutNowComp