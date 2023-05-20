import React, { useState } from 'react';
import { connect } from 'react-redux';
import { get_data,search_data } from '../../action/Action';

const Searchbar = ({search_data, get_mvname_from_component,page, query}) => {

  const [mv_name, setName] = useState(query)
  
  // This function will send a searched stroing to reducer action
  const searchMovie = (e) => {
    e.preventDefault()

    if(mv_name === ""){
      window.location.reload()
    }

    get_mvname_from_component(mv_name)
    search_data(mv_name,page)
  }

  const go_home = () => {
    window.location.reload()
  }  

  return (
    <>
      <div className='hidden md:grid grid-rows-2 md:mt-20'>
       <div className='grid grid-cols-5'>
          <div className='w-90 col-span-3 border-2 w-full outline-none overflow-hidden bg-white py-2 px-4 rounded-full shadow-lg flex flex-grow-1'>
            <input type="text" className='w-full outline-none' value={mv_name} onChange={e => setName(e.target.value)} placeholder='Search movies . . .'/>
            <span onClick={go_home} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <div className='col-span-1'>
            <button className='px-8 py-2 mr-40 ml-8 bg-red-400 rounded-full text-white text-center font-mono font-bold hover:bg-opacity-80 shadow-lg' onClick={searchMovie}>Search</button>
          </div>
        </div>
      </div>

        <div className='md:hidden block w-full mt-10'>
          <input type="text" className='border-2 outline-none px-6 py-3 rounded-md block shadow-lg mt-6 w-full' value={mv_name} onChange={e => setName(e.target.value)} placeholder='Search movies . . .' />
          <button className='bg-red-400 rounded-md text-white font-mono font-bold hover:bg-opacity-80 shadow-lg px-6 py-2 my-2' onClick={searchMovie}>Search</button>
        </div>
    </>
  );
}

const mapStateToProps = state => ({
  query: state.movie_reducer.query
})

export default connect(mapStateToProps, {get_data, search_data})(Searchbar);