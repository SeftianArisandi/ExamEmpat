import React from 'react';

import { useSelector } from 'react-redux';

const Loader = () => {

    let data = useSelector(state => state.myData);

    return (
        <div className="loader-container" id="page-loader"> 
            <div className="loading-wrapper">
                <div className="loader-animation" id="loader-animation">
                    <span className="loader"><span className="loader-inner" /></span>
                </div>

                {/* Edit With Your Name */}
                <div className="loader-name" id="loader-name">
                    {data.name}
                </div>
                {/* /Edit With Your Name */}

                {/* Edit With Your Job */}
                <p className="loader-job" id="loader-job">{data.job}</p>
                {/* /Edit With Your Job */}
            </div>   
        </div>
    )
}

export default Loader