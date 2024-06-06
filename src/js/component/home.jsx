import React from "react";
import Navbar from "./narbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <Jumbotron />
				<br/>
                <div className="row">
                    <Card 
                        image="https://via.placeholder.com/150"
                        title="Card title 1"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        link="#"
                    />
                    <Card 
                        image="https://via.placeholder.com/150"
                        title="Card title 2"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        link="#"
                    />
                    <Card 
                        image="https://via.placeholder.com/150"
                        title="Card title 3"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        link="#"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
