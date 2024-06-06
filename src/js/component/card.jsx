import React from 'react';

const Card = ({ image, title, text, link }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100  bg-secondary border-dark">
                <img className="card-img-top" src={image}  style={{ width: '100%', height: '200px' }} alt="Card cap" />
                <div className="card-body">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title text-white ">{title}</h5>
                    <p className="card-text text-white">{text}</p>
                 </div>
                    
                    <div className="card-body border-top mx-auto">
                        <a href={link} className="btn btn-dark d-grid gap-1 col-12  d-md-flex justify-content-md-center">Go Buy</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
