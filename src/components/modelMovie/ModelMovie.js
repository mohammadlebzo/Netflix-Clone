import './ModelMovie.css'
import { Modal, Button, Card, Form } from 'react-bootstrap'
import { useState } from "react";

export default function ModelMovie(props) {

    const [commentValue, setCommentValue] = useState('');

    async function handleAddToFav(e, movie) {
        e.preventDefault();
        let url = `${process.env.REACT_APP_SERVER}/postMovieData`;
        let movieData = {
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            personal_comment: commentValue,
        };
        // console.log("Movie Data", movieData);
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieData),

        })

        if (response.status === 500) {
            alert('Response Status 500, didn\'t add movie to favorite');
        }
        else{
            alert('Added to favorite');
        }
        // console.log(response.status);
        // let addedmovie = await response.json();
        // console.log("2,addedmovie", addedmovie);
        
    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img src={`${props.imageStartURL}${props.movieData.poster_path}`} />
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="textAreaTest"
                            
                        >
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder='Add a comment'
                                value={commentValue}
                                onChange={e => setCommentValue(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => {
                        handleAddToFav(e, props.movieData)
                        props.handleClose();
                    }}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}