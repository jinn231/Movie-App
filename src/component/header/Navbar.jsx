import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [ responsive, setResponsive ] = useState(false)

  const reload_page = () => {
    setResponsive(false)
  }

  return (
    <>
      <nav className='px-10 py-5 border-r-2 border-yellow-500 hidden lg:block sticky top-0 '>  
        <Link to="/">
          <h1 className='font-bold text-3xl cursor-pointer text-white text-center'>MOVIE APP</h1>      
        </Link>

        <ul className='text-center flex flex-col justify-center'>
          <Link to="/" className="mx-auto list-none my-10 cursor-pointer text-gray-300 font-semibold hover:text-gray-500 uppercase px-0">
            <span className='flex'>
              home
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h- mx-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </span>
          </Link>
          <Link to="search_movie" className="mx-auto list-none my-10 cursor-pointer text-gray-300 font-semibold hover:text-gray-500 uppercase px-0">
            <span className='flex'>
              search
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </Link>
          <Link to="blog" className="mx-auto list-none my-10 cursor-pointer text-gray-300 font-semibold hover:text-gray-500 uppercase px-0">
          <span className='flex'>
              blog
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </span>
          </Link>
          <li className="mx-auto list-none my-10 cursor-pointer text-gray-300 font-semibold hover:text-gray-500 uppercase px-0">
          <span className='flex'>
              contact
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
          </li>
        </ul>
      </nav>

      <nav className='lg:hidden w-full flex flex-1 bg-red-500 justify-between p-6 fixed z-10 top-0'>
        <div className=''>
          <Link to="/" onClick={reload_page}>
            <h1 className='font-bold text-xl text-white text-center cursor-pointer select-none' onClick={reload_page}>MOVIE APP</h1>
          </Link>
        </div>

        <div className='text-white font-xl cursor-pointer' onClick={() => setResponsive(!responsive)}>
          
          {
            responsive ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            )
          }
          
        </div>

        <div className='absolute bg-gray-500 backdrop-brightness-105 right-0 mt-10 flex justify-center items-center flex-col transition-all duration-1000 ease-in-out' style={{width: "100vw", height: "100vh", display : responsive ? "flex" : "none"}}>
          <ul className='flex flex-col '>
            <Link to="/" onClick={reload_page} className="list-none cursor-pointer text-gray-300 text-2xl font-bold uppercase px-5 my-5 transition duration-200 hover:translate-x-4 ease-linear hover:opacity-50 hover:underline ">
              <span className='flex select-none'>
                home
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h- mx-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </span>
            </Link>
            <Link to="search_movie" onClick={reload_page} className="list-none cursor-pointer text-gray-300 text-2xl font-bold uppercase px-5 my-5 transition duration-200 hover:translate-x-4 ease-linear hover:opacity-50 hover:underline ">
              <span className='flex select-none'>
                search
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </Link>
            <Link to="blog" className="list-none cursor-pointer text-gray-300 text-2xl font-bold uppercase px-5 my-5 transition duration-200 hover:translate-x-4 ease-linear hover:opacity-50 hover:underline ">
              <span className='flex select-none'>
                blog
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </span>
            </Link>
            <li className="list-none cursor-pointer text-gray-300 text-2xl font-bold uppercase px-5 my-5 transition duration-200 hover:translate-x-4 ease-linear hover:opacity-50 hover:underline ">
              <span className='flex select-none'>
                contact
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
    
  )
}

export default Navbar
