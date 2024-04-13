import React, { useState } from 'react';
import { useMovieReviewQuery } from '../../../hooks/useMovieReview';
import './MovieReview.style.css';
import Alert from 'react-bootstrap/Alert';

const MovieReview = ({ id }) => {
    // showMore 상태를 객체로 초기화
    const [showMore, setShowMore] = useState({});

    const { data, isLoading, isError, error } = useMovieReviewQuery({ id });
    
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    const toggleShowMore = (reviewId) => {
        // 현재 상태의 반대로 설정
        setShowMore(prev => ({ ...prev, [reviewId]: !prev[reviewId] }));
    };

    return (
        <div>
            <div>
                {data?.map((review, index) => (
                    <div key={index} className='review-box'>
                        <h4>{review?.author}</h4>
                        <div>
                            {showMore[index] ? review?.content : `${review?.content.substring(0, 300)} . . .`}
                            <span className='toggle-button' onClick={() => toggleShowMore(index)}>
                            {showMore[index] ? '접기' : '더보기'}
                        </span>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieReview;
