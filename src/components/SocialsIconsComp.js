import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CommonButton from './subComponents/CommonButton'
import SocialSmallBox from './subComponents/SocialSmallBox'
const SocialsIconsComp = () => {
    return (
        <>
            <div className="socialiconsmain">
                <div className="myBigContainer">
                    <Row>
                        <Col lg={6} className='d-flex align-items-center'>
                            <div className="wrap">
                                <div className="subheading">
                                    <h2 style={{ marginBottom: "30px" }}>Sed ut perspiciatis unde omnis iste natus error. <span>Try out!</span></h2>
                                </div>
                                <div className="paragraph">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ullamco esse cillium</p>
                                </div>
                                <div className="button">
                                    <CommonButton icon="./assets/images/homepage/banner/vectorplay.png" onclick="/" name="Try Out Now!" type="active" linktype="button" />
                                </div>

                            </div>
                        </Col>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <Row>
                                <Col lg={4}>
                                    <SocialSmallBox cmsoon="" imgurl="./assets/images/homepage/socialicons/1.png" />
                                    <SocialSmallBox cmsoon="" imgurl="./assets/images/homepage/socialicons/2.png" />
                                    <SocialSmallBox cmsoon="" imgurl="./assets/images/homepage/socialicons/3.png" />
                                </Col>
                                <Col lg={4} style={{ marginTop: "112px" }}>



                                    <SocialSmallBox cmsoon="" imgurl="./assets/images/homepage/socialicons/4.png" />
                                    <SocialSmallBox cmsoon="true" imgurl="./assets/images/homepage/socialicons/5.png" />
                                    <SocialSmallBox cmsoon="true" imgurl="./assets/images/homepage/socialicons/6.png" />
                                </Col>
                                <Col lg={4}>
                                    <SocialSmallBox cmsoon="" imgurl="./assets/images/homepage/socialicons/7.png" />
                                    <SocialSmallBox cmsoon="true" imgurl="./assets/images/homepage/socialicons/8.png" />
                                    <SocialSmallBox cmsoon="true" imgurl="./assets/images/homepage/socialicons/9.png" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default SocialsIconsComp