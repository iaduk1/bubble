import React, { Component } from 'react';
import bannerImg from '../assets/img/banner.jpg';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <div className="row header">
                    <nav className="navbar navbar-expand" style={{ height: '30px' }}>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item mr-5">
                                    <Link to="/" >Leaderboard</Link>
                                </li>
                                <li className="nav-item mr-5">
                                    <Link to="/page2" >Events</Link>
                                </li>
                                <li className="nav-item mr-5">
                                    <Link to="/page3" >Squad Space</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="row banner" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: `100%`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat' }}>
                    <h2 className="banner-text">HERO IMG</h2>
                </div>
            </div>
        );
    }

}

export default Header;