import './FavList.css'
import { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap'

export default function FavList(movie) {

    let imageStartURL = 'https://image.tmdb.org/t/p/w500';
    const [movies, setMovies] = useState([]);

    async function getDB_Data() {
        let url = process.env.REACT_APP_SERVER;

        let response = await fetch(`${url}/getMovieData`);

        let moviesData = await response.json();
        // console.log("Movies Data", moviesData);
        setMovies(moviesData);
    }

    async function handleDeleteMovie(id) {
    
        let url = `${process.env.REACT_APP_SERVER}/deleteMovieDataByID/${id}`;
        let response = await fetch(url, {
            method: "DELETE",
        });
        // console.log(response.status);
        if(response.status==204){
            getDB_Data();
           alert(" Movie Deleted Successfully")
        }
        
    }

    async function handleUpdateFav(id) {
        let url = `${process.env.REACT_APP_SERVER}/updateMovieDataByID/${id}`;
        let newComment = prompt("Edit comment:")
        let movieData = {
            personal_comment: newComment,
        };
        // console.log("Movie Data", movieData);
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieData),

        })
        // console.log(response.status);
        // let addedmovie = await response.json();
        // console.log("2,addedmovie", addedmovie);

        getDB_Data();
        
    }

    useEffect(() => {
        getDB_Data();
    }, []);

    

    return (
        <>
            <div className='moviesContainer'>
                {movies && movies.map(movie => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${imageStartURL}${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text> <span className='boldSpan'>Release: </span> {movie.release_date}</Card.Text>
                                <Card.Text>{movie.overview}</Card.Text>
                                <Card.Text> <span className='boldSpan'>Comment: </span> {movie.personal_comment}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button onClick={() => handleDeleteMovie(movie.id)} variant="primary">Delete </Button>
                                &nbsp;
                                <Button onClick={() => handleUpdateFav(movie.id)} variant="primary">Update </Button>
                            </Card.Footer>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}