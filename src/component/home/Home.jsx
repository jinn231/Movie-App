import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import HomeFooter from './Footer';
import MovieCard from './MovieCard';
import Slide1 from './Slide1';
import BarLoader from '../BarLoader/BarLoader';
import { get_data, search_data, selecting_movie } from '../../action/Action';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({movies, get_data, search_data, searched, selecting_movie}) => {

  const [page, setPage] = useState(1)

  useEffect(() => {
    get_data(page)
  }, [movies])

  // To increase the page number
  const increase_page = (page_num) => {
    if(page_num > 14){
    setPage(1)
    }else{
      setPage(page_num)
        get_data(page)       
    }
  }

  // To decrease the page number
  const decrease_page = (page_num) => {
    if(page <= 1){
      setPage(14)
    }else{
      setPage(page_num)
      get_data(page)    
    }
  }

  return (
    <div className='mx-20'>
        <Slide1 />

        <div >
          <Link to="search_movie">
            <button className='p-3 flex justify-end text-white font-mono bg-blue-600 rounded-md hover:bg-blue-500 shadow-md shadow-blue-700'>
              Click To Search For More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>  
            </button>
          </Link>
        </div>

        <div className='md:grid-cols-3 grid-cols-1 mt-10 md:mr-20 grid gap-10'>
          { movies === [] ? (<BarLoader />) : ( movies.map(mov => (
            <MovieCard key={mov.id} movie={mov} />
          )))}
        </div>

        <HomeFooter page={page} increase_page={increase_page} decrease_page={decrease_page} />
    </div>
  )
}
const mapStateToProps = state => ({
  movies : state.movie_reducer.movies,
  searched : state.movie_reducer.searched,
})
export default connect(mapStateToProps, {get_data, search_data, selecting_movie})(Home);
