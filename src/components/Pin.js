import { ArrowBack } from '@mui/icons-material'
import React from 'react'

const Pin = ({pinsize}) => {
  return (
    <div className={`pin ${pinsize}`}>
      <img src='https://cdn.pixabay.com/photo/2019/08/21/16/03/panda-4421395_1280.jpg' className='mainPic' alt='sampleImg'/>
      <div className='content'>
        <h3>sample</h3>
        <div className='search'>{<ArrowBack />}</div>
      </div>
    </div>
  )
}

export default Pin
