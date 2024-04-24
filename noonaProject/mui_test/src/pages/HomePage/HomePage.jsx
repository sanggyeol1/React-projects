import React from 'react'
import { useCampingDataQuery } from '../../hooks/useCampingData.js';

import CampingCard from '../../component/CampingCard/CampingCard.jsx';

const HomePage = () => {

    const { data, isLoading, isError, error } = useCampingDataQuery();
    console.log(data)

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h3>Error: {error.message}</h3>;
    }



    return (
        <div>
            {
                data.map((data, index) => (
                    <div key={index}>
                        <CampingCard data={data} />
                    </div>
                ))
            }
        </div>
    )
}

export default HomePage