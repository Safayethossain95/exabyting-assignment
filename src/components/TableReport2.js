import React from 'react'
import CommonTable2 from './subComponents/CommonTable2'
import { adReportFirstTableApi, report2TableApi } from '../utils/tableApi'

const TableReport2 = () => {
  return (
        <>
        <div className="report2table">

        <div className="myBigContainer">
            <CommonTable2 tabledata={report2TableApi}/>

        </div>
        </div>
        </>
  )
}

export default TableReport2