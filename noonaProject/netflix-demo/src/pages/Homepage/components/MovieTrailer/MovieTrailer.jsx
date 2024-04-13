import React from 'react'
import YouTube from 'react-youtube';
import Modal from 'react-bootstrap/Modal';
import { useMovieTrailerQuery } from '../../../hooks/useMovieTrailer';
import Alert from 'react-bootstrap/Alert'
import './MovieTrailer.style.css'

const MovieTrailer = ({ show, handleClose, id }) => {

    const { data, isLoading, isError, error } = useMovieTrailerQuery({ id });
    console.log(data)



    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} className="custom-modal-width">
                <Modal.Body >
                    <YouTube 
                        videoId={data[0].key}  // Video ID from YouTube
                        id={data[0].id}  // Element ID
                        className="youtube"               // defaults -> ''
                        iframeClassName="youtube-iframe"
                    />

                </Modal.Body>
            </Modal>

        </div>
    )
}

export default MovieTrailer