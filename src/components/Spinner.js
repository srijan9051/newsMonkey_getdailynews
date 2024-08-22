import React from 'react';
import loading from '../loading.gif';
import '../Spinner.css'; 

const Spinner = () => {
    return (
        <div className="spinner-overlay">
            <img src={loading} alt="loading" className="spinner-image" />
        </div>
    );
}

export default Spinner;
