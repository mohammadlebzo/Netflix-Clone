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
                <Card.Img variant="top" src={`${imageStartURL}${props.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text> <span className='boldSpan'>Release: </span> {props.release_date}</Card.Text>
                    <Card.Text>{props.overview}</Card.Text>
                    <Button onClick={handleShow} variant="primary">Add To Favorites </Button>
                </Card.Body>
            </Card>
            {show &&
                <ModelMovie
                    title={props.title}
                    image={`${imageStartURL}${props.poster_path}`}
                    show={show}
                    handleClose={handleClose}
                />
            }
        </>
    )
}