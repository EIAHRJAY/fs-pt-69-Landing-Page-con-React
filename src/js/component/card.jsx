import React from 'react';

const Card = ({ image, title, text, link }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100">
                <img className="card-img-top" src={image} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
