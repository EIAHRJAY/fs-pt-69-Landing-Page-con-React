import React from 'react';


const Jumbotron = () => {
    return (
        <div className='border border-black p-5 p-md-6 mb-3 rounded text-body-emphasis bg-body-secondary bg-secondary ' >
            <br/>
            <br/>
            <div className="jumbotron " >
                <h1 className="display-4">Welcome to My House</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu urna eu diam tristique blandit. In hac habitasse platea dictumst. Suspendisse porttitor euismod erat at tempus. Etiam ornare imperdiet leo et semper.</p>
                <a className="btn btn-dark btn-lg" href="#" role="button">Let's Go!</a>
            </div>
            <br/>
            <br/>
        </div>
    );
};


export default Jumbotron;
