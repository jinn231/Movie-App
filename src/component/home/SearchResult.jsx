import React, {useState} from 'react'
import { connect } from 'react-redux'
import Searchbar from './Searchbar'
import BarLoader from '../BarLoader/BarLoader'
import MovieCard from './MovieCard'
import { useEffect } from 'react'
import { search_data } from '../../action/Action'
import HomeFooter from './Footer'

const SearchResult = ({search_movies, search_data}) => {

  const [page, setPage] = useState(1)
  const [mv_name, setMovie ] = useState("")

  useEffect(() => {
    if(mv_name !== ""){
      search_data(mv_name, page)
    }
  }, [search_movies])
  
  // Get string value from searchbar component
  const get_mvname_from_component = (query) => {
    setMovie(query)
  }

    // To increase the page number
    const increase_page = (page_num) => {
      if(page_num > 7){
      setPage(1)
      }else{
        setPage(page_num)
          search_data(mv_name,page)       
      }
    }
  
    // To decrease the page number
    const decrease_page = (page_num) => {
      if(page <= 1){
        setPage(1)
      }else{
        setPage(page_num)
        search_data(mv_name,page)    
      }
    }

  return (
    <div className='p-10'>
        <Searchbar get_mvname_from_component={get_mvname_from_component} page={page}/>

        <div className='md:grid-cols-3 grid-cols-1 mt-10 md:mr-20 grid gap-10'>
          { search_movies === [] ? (<BarLoader />) : ( search_movies.map(mov => (
            <MovieCard key={mov.id} movie={mov} />
          )))}
        </div>    
            
        <div className={`${mv_name === "" ? "hidden" : "inline"}`}>
          <HomeFooter page={page} increase_page={increase_page} decrease_page={decrease_page} />
        </div>  
        
    </div>
  )
}

const mapStateToProps = state => ({
  search_movies : state.movie_reducer.search_movies,
})

export default connect(mapStateToProps, {search_data})(SearchResult);
