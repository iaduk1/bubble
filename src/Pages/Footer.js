import React, { Component } from 'react';
import footerImg from '../assets/img/footer.PNG';


class Footer extends Component {
    render() {
        return (
            <div className="row">
                <div className="footer" style={{ backgroundImage: `url(${footerImg})`, backgroundSize: `100%`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat' }}>
                </div>
            </div>
        )
    }
}

export default Footer;