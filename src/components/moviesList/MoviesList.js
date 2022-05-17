import './MoviesList.css'
import Movie from '../movie/Movie'

export default function MoviesList(props) {
    return (
        <>
            <div className='moviesContainer'>
                {props.moviesData.map(movie => {
                    return (
                        <>
                            <Movie movieData={movie}/>
                        </>
                    )
                })}
            </div>
        </>
    )
}