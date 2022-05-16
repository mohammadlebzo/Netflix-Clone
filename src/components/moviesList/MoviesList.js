import './MoviesList.css'
import Movie from '../movie/Movie'

export default function MoviesList(props) {
    return (
        <>
            <div className='moviesContainer'>
                {props.moviesData.map(movie => {
                    return (
                        <>
                            <Movie
                                id={movie.id}
                                title={movie.title}
                                release_date={movie.release_date}
                                poster_path={movie.poster_path}
                                overview={movie.overview}
                            />
                        </>
                    )
                })}
            </div>
        </>
    )
}