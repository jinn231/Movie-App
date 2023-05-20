import React from 'react'
import Navbar from '../component/header/Navbar'
import { selecting_movie } from '../action/Action'
import { connect } from 'react-redux'

const ContextContainer = ({children, selecting_movie}) => {

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-5 lg:col-span-1'>
        <Navbar />      
      </div>
      <div className='col-span-5 lg:col-span-4'>
        {children}      
      </div>
    </div>
  )
} 

export default connect(null, {selecting_movie})(ContextContainer);
