import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BarLoader from '../BarLoader/BarLoader'
import useMediaQuery from "@mui/material/useMediaQuery";
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const MovieDetail = ({select_movie, fetching_vd}) => {

  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const isActive = useMediaQuery("(max-width: 1300px)");
  const openModal = () => {
    setModal(!modal)
  }

  const GoBack = () => {
    navigate("/")
  }

  return (
    <> 

    {
      select_movie.get_mv === undefined ? (
        <div className='text-center flex justify-center flex-col self-center mt-96 md:mt-72'>
          <h1 className='text-white text-4xl'>404 Not Found.</h1>
          <p className='text-white py-4'>You see this message because this movie was deleted by admin or it is no longer exist.</p>
          <div>
            <button onClick={GoBack} className='p-3 my-2 bg-blue-700 text-white rounded-md transition duration-150 hover:opacity-60'>Go Back To Home</button>
          </div>
        </div>
      ) :
    fetching_vd? (
      <div className='my-20 p-5 md:p-0 md:m-10 md:mt-10 md:pt-20 lg:p-10 lg:m-0'>
        <div className='flex'>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500/${select_movie.poster_path}`} alt="logo" className='w-40 h-60 shadow-md shadow-gray-600' />
          </div>
          <div>
            <ul className='flex mx-2 md:mx-5 text-white flex-col text-sm md:text-xl font-thin'>
              <li className='mb-3'>
                Title : {select_movie.title}
              </li>
              <li  className='my-3'>
                Reseased at : {select_movie.release_date}
              </li>
              <li  className='my-3'>
                Popularity : {select_movie.popularity}
              </li >
              <li  className='my-3'>
                Vote : {select_movie.vote_average}
              </li>
              <ul className='text-yellow-500 flex'>
                <li>&#9733;</li>
                <li>&#9733;</li>
                <li>&#9733;</li>
                <li>&#9733;</li>              
              </ul>
            </ul>
          </div>
        </div>
  
        <div>
          <h1 className='text-white text-2xl py-3 font-mono'>Overview</h1>
          <div>
            <p className='text-white'>
              {select_movie.overview}
            </p>
          </div>
        </div>
  
        <div className='my-4'>
        {!modal ? (
              <button onClick={openModal} disabled={select_movie.get_mv.key ? false : true} className='bg-blue-800 text-white font-thin p-3 flex flex-grow-1 shadow-sm transition duration-500 ease-in-out shadow-gray-300 hover:bg-gray-500 hover:text-black'>
                Watch Trailer
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-thin mx-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </button>
        ) : (
          <button onClick={openModal} className='bg-blue-800 text-white font-thin p-3 flex flex-grow-1 shadow-sm transition duration-500 ease-in-out shadow-gray-300 hover:bg-gray-500 hover:text-black'>
          Close Trailer
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-thin mx-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
          </svg>
        </button>
        )
        }
  
        </div>
  
          {
            modal ? ( 
              <div>
              {
                !isActive ? (
                  <div className='bg-gray-300 rounded-xl backdrop-filter absolute self-center	top-0 right-0 m-3'>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${select_movie.get_mv.key}?rel=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                ) : (
                  <div className='rounded-xl m-3' style={{ width:"560",height:"315"}}>
                    <iframe className='w-full' height="315" src={`https://www.youtube.com/embed/${select_movie.get_mv.key}?rel=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>               
                )
              }
            </div>
            ) : null
          }

          <table className="border p-10 w-full mr-1">
            <thead>
              <tr className='border text-black font-serif'>
                <th className='p-3 bg-gray-400'>Movie Name</th>
                <th className='p-3 bg-gray-300'>Popularity</th>
                <th className='p-3 bg-gray-400'>Year</th>
                <th className='p-3 bg-gray-300'>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-white text-center border-b'>
                <td className='p-3 border-r' >{select_movie.title}</td>
                <td className='p-3 border-r' >{select_movie.popularity}</td>
                <td className='p-3 border-r' >{select_movie.release_date}</td>
                <td className='cursor-pointer p-3'>
                  <span className='flex justify-center flex-1 transition duration-150 ease-in-out hover:text-gray-400'>
                    Media Fire <SaveAltIcon className='mx-1' />
                  </span>
                </td>
              </tr>
              <tr className='text-white text-center border-b'>
                <td className='p-3 border-r' >{select_movie.title}</td>
                <td className='p-3 border-r' >{select_movie.popularity}</td>
                <td className='p-3 border-r' >{select_movie.release_date}</td>
                <td className='cursor-pointer p-3'>
                  <span className='flex justify-center flex-1 transition duration-150 ease-in-out hover:text-gray-400'>
                    Drive <SaveAltIcon className='mx-1' />
                  </span>
                </td>
              </tr>
              <tr className='text-white text-center border-b'>
                <td className='p-3 border-r' >{select_movie.title}</td>
                <td className='p-3 border-r' >{select_movie.popularity}</td>
                <td className='p-3 border-r' >{select_movie.release_date}</td>
                <td className='cursor-pointer p-3'>
                  <span className='flex justify-center flex-1 transition duration-150 ease-in-out hover:text-gray-400'>
                    YoteShin <SaveAltIcon className='mx-1' />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    ) : <BarLoader />
  } 
    </>
  )  
}

const mapStateToProps = state => ({
  select_movie: state.movie_reducer.select_movie,
  fetching_vd : state.movie_reducer.fetching_vd,
  query : state.movie_reducer.query,
})

export default connect(mapStateToProps)(MovieDetail);