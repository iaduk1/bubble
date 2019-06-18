import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Page3 extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <p>HTML tags here</p>
                </div>
                <div className="row">
                    <Carousel>
                        <div>
                            <img src="assets/img/banner1.jpg" alt="img1" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="assets/img/banner.jpg" alt="img1" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="assets/img/banner.jpg" alt="img1" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Page3;