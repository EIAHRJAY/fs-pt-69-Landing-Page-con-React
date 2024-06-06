import React from "react";
import Navbar from "./narbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

//include images into your bundle
import Footer from "./Footer";

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
                        image="https://www.mueblesdiaz.com/wp-content/uploads/2017/04/2380.jpg"
                        title="Dinner Room"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        link="#"
                    />
                    <Card 
                        image="https://th.bing.com/th/id/R.6e29bc134986b70c4be636f2dfe3996d?rik=pKPMwKpywfZibA&riu=http%3a%2f%2fwww.creaespai.com%2fwp-content%2fuploads%2f2016%2f11%2fmueble-de-salon-mesegue-netro-14.jpg&ehk=yN5SO%2fgwSPl2p52OjQMkuT%2b7XfFRnGaO9SDf64WOq9Q%3d&risl=&pid=ImgRaw&r=0"
                        title="Cliving Room"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        link="#"
                    />
                    <Card 
                        image="https://th.bing.com/th/id/R.dba6226de11a5a4ac3e694c402bb40cb?rik=zCVl0N%2fn6WILSQ&riu=http%3a%2f%2fwww.fabrica-muebles.cl%2fwp-content%2fuploads%2f2013%2f01%2fMuebles-de-cocina-05.jpg&ehk=u5kr6mTco2jzOc8Ik9ehBSzmFQbBe5m3lBRIb9IX4Lw%3d&risl=&pid=ImgRaw&r=0"
                        title="Kitchen"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        link="#"
                    />
                    <Card 
                        image="https://i.pinimg.com/originals/36/40/53/364053d54c14dbb5d7adee013583a3f1.jpg"
                        title="Terrace"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        link="#"
                    />
                </div>
            </div>
        <Footer
            icon=""
        />
        </div>
    );
};

export default Home;
