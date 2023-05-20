import React from 'react'
import "./Blog.css"

const Blog = () => {
  return (
    <div className='mt-20 grid grid-rows-2 gap-10 md:grid-cols-2'>
        <div id='text-container' className='xl:flex hidden justify-center flex-col relative'>
            <div id="eff_line"></div>
            <div id='dynamic-text' className='text-xl md:text-3xl p-10'>
                <p className='text-center text-gray-200 font-mono inline'>Hi,I am </p>
                <span className='inline text-gray-200 font-mono relative py-2'>a fullstack developer . </span>
            </div>
        </div>
        <div>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Blog;