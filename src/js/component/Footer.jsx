import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p>We are a company dedicated to selling modern and elegant furniture for your home.</p>
                    </div>
                    <div className="col-md-4 mb-3 ">
                        <h5>Follow Us</h5>
                        
                           <a href="#" className="text-white p-2"><i className="fab fa-facebook"></i></a>

                            <a href="#" className="text-white p-2 "><i className="fab fa-twitter"></i></a>

                            <a href="#" className="text-white p-2"><i className="fab fa-instagram"></i></a>

                            <a href="#" className="text-white p-2"><i className="fab fa-whatsapp"></i></a>
                       
                        
                    </div>
                    <div className="col-md-4 mb-3">
                        <h6>copyright©  website 2024</h6>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center mt-2">
                        <p className="mb-0  align-items-end"></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;