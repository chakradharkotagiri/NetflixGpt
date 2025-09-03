import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div className='md:-mt-50 mt-0 bg-black'>
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies || []} />
       <MovieList title={"Popular"} movies={movies.popularMovies || []} />
       <MovieList title={"Trending"} movies={movies.nowPlayingMovies || []} />
       <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies || []} />

    </div>
  )
}

export default SecondaryContainer
