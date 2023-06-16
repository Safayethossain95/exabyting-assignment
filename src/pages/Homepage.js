import React from 'react'

import Banner from '../components/Banner';
import AdReportComp from '../components/AdReportComp';
import SocialsIconsComp from '../components/SocialsIconsComp';
import TestimoniaComp from '../components/TestimoniaComp';
import TryOutNowComp from '../components/TryOutNowComp';
import ChartPartComp from '../components/ChartPartComp';
import FirstTouchLastComp from '../components/FirstTouchLastComp';
import SocialTwoComp from '../components/SocialTwoComp';
import TableReport2 from '../components/TableReport2';
import ApplyPartComp from '../components/ApplyPartComp';
import FooterComp from '../components/FooterComp';
import MyNavbar from '../components/subComponents/MyNavbar';
const Homepage = () => {
 
  return (
    <div className="homepagemain">
       <MyNavbar/>
    <Banner/>
    <AdReportComp/>
    <SocialsIconsComp/>
    <TestimoniaComp/>
    <TryOutNowComp/>
    <ChartPartComp/>
    <FirstTouchLastComp/>
    <SocialTwoComp/>
    <TableReport2/>
    <ApplyPartComp/>
    <FooterComp/>
    </div>
  )
}

export default Homepage