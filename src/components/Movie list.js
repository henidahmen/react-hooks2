import React from 'react'
import MovieCard from './Movie card'
// import MovieCard from '../moviecard/MovieCard'

const MovieList = ({movielist}) => {
    return (
        <div className="d-flex justify-content-around flex-wrap">
            {
                movielist.map(movie => <MovieCard movie={movie} key={movie.id} />)
            }
        </div>
    )
        }
        export default MovieList