import './Movie.css'
import { Card, Button } from 'react-bootstrap'
import { useState } from "react";
import ModelMovie from '../modelMovie/ModelMovie';

export default function Movie(props) {
    let imageStartURL = 'https://image.tmdb.org/t/p/w500';

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${imageStartURL}${props.movieData.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.movieData.title}</Card.Title>
                    <Card.Text> <span className='boldSpan'>Release: </span> {props.movieData.release_date}</Card.Text>
                    <Card.Text>{props.movieData.overview}</Card.Text>
                    <Button onClick={handleShow} variant="primary">Add To Favorites </Button>
                </Card.Body>
            </Card>
            {show &&
                <ModelMovie
                    movieData={props.movieData}
                    imageStartURL={imageStartURL}
                    show={show}
                    handleClose={handleClose}
                />
            }
        </>
    )
}