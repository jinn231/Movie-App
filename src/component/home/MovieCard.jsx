import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { selecting_movie } from '../../action/Action';
import "./MovieCard.css";

const MovieCard = ({movie, selecting_movie}) => {
  const navigate = useNavigate()
  const myRef = useRef()
  const [Visible, setVisible] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, [])


  const send_mv_to_prop = () => {
    selecting_movie(movie)
    navigate("/movie")
  }
  
  return (
    <div ref={myRef} key={movie.id} className={`${Visible ? "show_eff" : "hide_eff"} transition duration-300 ease-in-out rounded overflow-hidden bg-blue-600 shadow-md shadow-gray-300 h-96 relative`}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-full h-full absolute object-cover hover:scale-125 transition duration-500 ease-out cursor-pointer' alt="movie-logo" />
        <div className='m-4 cursor-pointer absolute bottom-0 w-full pr-8 filter'>
          <strong className='font-bold block text-sm text-white shadow lg:text-xl bg-blend-soft-light font-sans py-2 uppercase pr-4 overflow-hidden'>{movie.title}</strong><hr/>
          <span className='font-semibold text-green-400 py-5 font-mono block'>{movie.release_date}</span>
            <strong className='font-xl text-gray-300'> Ranking : {movie.popularity}</strong>
              <div className='my-2 text-right' onClick={send_mv_to_prop}>
                <span className='py-2 px-3 rounded font-mono font-bold transition duration-300 ease-linear text-left bg-blue-600 text-white hover:bg-gray-100 hover:text-black'>See more</span>
              </div>     
        </div>
    </div>
  )
}


export default connect(null,{selecting_movie})(MovieCard);