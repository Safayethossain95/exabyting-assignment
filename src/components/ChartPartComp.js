import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Line } from 'react-chartjs-2'

import CommonTable from './subComponents/CommonTable';
import { chartFBTableApi, logoIpsumtableApi } from '../utils/tableApi';

import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const ChartPartComp = () => {
    
    const data1 = [0, 0.5, 3.9, 2.7, 4.1,2.9,4.8,4.9];
  const data2 = [0, 0.3, 1.5, 1, 2.6,1.1,2.6,2.3];
    const chartData = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5','Label 6','Label 7','Label 8'],
        datasets: [
          {
            label: 'Line 1',
            data: data1,
            borderColor: '#58BF73',
            fill: false,
             borderWidth: 7,
           
          },
          {
            label: 'Line 2',
            data: data2,
            borderColor: '#FFC907',
            fill: false,
             borderWidth: 7,
          },
        ],
      };
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        
        scales: {
          y: {
            beginAtZero: true,
            display: true, // Show y-axis labels
            grid: {
              display: true, // Show grid lines
              color: 'rgba(0, 0, 0, 0.1)', // Set the color of the grid lines
              drawBorder: false, // Disable the border around the chart
            },
          },
          x: {
            display: false, // Hide x-axis labels
          },
          // yAxes configuration
 
        },
      };
  return (
    <div className="chartpartmain">
        <div className="myBigContainer">
            
                <div className="chartpartheader m-auto">
                    <div className="subheading">
                        <h2 className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting</h2>
                    </div>
                    <div className="paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                </div>
                <div className="wrapperchart">
                <div className="mainchart">
                 <Line style={{height:"318px",width:"80%"}} data={chartData} options={chartOptions}></Line>
                </div>
                <div className="numbersfloat">
                  <p>$3.455</p>
                  <p className='sm'>Tracked by Logoipsum Data</p>

                  <div className="secondnumber">
                  <p className='yellow'>$3.455</p>
                  <p className='sm'>Tracked by Logoipsum Data</p>
                  </div>
                </div>
                </div>
            
            <Row style={{marginTop:"65px"}}>
              <Col lg={10} className='m-auto'>

                <Row>
                  <Col lg={6}>
                    <h5 className='tablename text-center'>Facebook Data</h5>
                    <CommonTable tabledata={chartFBTableApi}/>
                  </Col>
                  <Col lg={6}>
                  <h5 className='tablename text-center'>Facebook Data</h5>
                    <CommonTable tabledata={logoIpsumtableApi}/>
                  </Col>
                </Row>
              </Col>
            </Row>
        </div>
    </div>
  )
}

export default ChartPartComp