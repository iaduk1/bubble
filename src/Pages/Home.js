import React, { Component } from 'react';
//import bannerImg from '../assets/img/banner.jpg';
//import { Link } from 'react-router-dom'; 
import { ProgressBar } from 'react-bootstrap';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squads: [{
                  "squad": {
                      "id": 1,
                      "name": "Ignite",
                      "clubId": 1,
                      "club": null
                  },
                  "totalDoantions": 90
              },
              {
                  "squad": {
                      "id": 2,
                      "name": "Phoenix",
                      "clubId": 2,
                      "club": null
                  },
                  "totalDoantions": 10
              },
              {
                "squad": {
                    "id": 3,
                    "name": "Muse",
                    "clubId": 3,
                    "club": null
                },
                "totalDoantions": 500
            }],
            clubs:[],
            maxSquad: 0,
            maxClub: 0
        }
    }




    componentDidMount() {
        //fetch here
        // fetch('http://localhost:5000/api/leaderboard/persquad')
        //     .then(response => response.json())
        //     .then(data => this.setState({ squads: data }));

        // fetch('http://localhost:5000/api/leaderboard/perclub')
        //     .then(response => response.json())
        //     .then(data => this.setState({ clubs: data }));

        // let keys = Object.keys(this.state);



        let { squads, maxSquad } = this.state;
        squads.forEach(squad => {
            if (squad.totalDoantions > maxSquad) {
                maxSquad = squad.totalDoantions;
            }
        });
        this.setState({ maxSquad });

    }



    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-between leaderboard-row">
                    <div className="flex-grow-1 leaderboard-chart">
                        <div className="sub-title">Clubs</div>

                    </div>
                    <div className="flex-grow-1 leaderboard-chart">
                        <div className="sub-title">Squads</div>
                        {
                            this.state.squads.map(squad => {
                                return (
                                    <ProgressBar now={(squad.totalDoantions / this.state.maxSquad) * 100} label={`${squad.squad.name + squad.totalDoantions}`} />
                                )
                            })
                        }
                    </div>

                </div>
            </div>

        )
    }

}

export default Home;
