import './Home.css'
import { useState, useEffect } from "react";
import MoviesList from '../moviesList/MoviesList';

export default function Home(props) {

    const [movies, setMovies] = useState([]);

    async function getMovies() {
        let url = process.env.REACT_APP_SERVER;

        let response = await fetch(`${url}/trending`);

        let moviesData = await response.json();
        console.log("Movies Data", moviesData);
        setMovies(moviesData);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <MoviesList moviesData={movies} />
        </>
    )
}