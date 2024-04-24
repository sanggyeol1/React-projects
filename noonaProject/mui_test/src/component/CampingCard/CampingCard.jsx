import React from 'react'
import './CampingCard.style.css'

const CampingCard = ({ data }) => {


    return (
        <div className='camping-card'>
            <div className='camping-card-content'>
                <div>{data?.facltNm}</div>
                <img width={300} src={data?.firstImageUrl} />
                <div>{data?.direction}</div>
                <a href={data?.homepage}></a>
            </div>
        </div>
    );
}

export default CampingCard;
