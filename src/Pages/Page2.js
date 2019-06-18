import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Page2 extends Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {

    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="row page2-form">
                    <div className="col-12 col-md-8 offset-md-2 d-flex">
                        <div className="col-6">
                            <div className="input-group mt-2">
                                <label className="mr-2">Event</label>
                                <input className="form-control" name="event"></input>
                            </div>
                            <div className="input-group mt-2">
                                <label className="mr-2">Club</label>
                                <input className="form-control" name="club"></input>
                            </div>
                            <div className="input-group mt-2">
                                <label className="mr-2">Squad</label>
                                <input className="form-control" name="squad"></input>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="input-group mt-2">
                                <label className="mr-2">Amount</label>
                                <input className="form-control" name="amount"></input>
                            </div>
                            <div className="input-group mt-2">
                                <label className="mr-2">Name</label>
                                <input className="form-control" name="name"></input>
                            </div>
                            <div className="input-group mt-2">
                                <label className="mr-2">Date</label>
                                <input className="form-control" name="date"></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-5">
                        <button className="btn btn-primary" onClick={this.submitHandler}>Submit</button>
                        <button className="btn btn-default ml-3" onClick="if(confirm(\'are you sure ?\')){ this.form.submit() }">Save</button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Page2;