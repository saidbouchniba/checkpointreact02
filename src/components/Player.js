import React from 'react'
import Card from 'react-bootstrap/Card';
import players from './Players';


function Player(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.Player.Img} style={{ height: "300px", }} />
                <Card.Body>
                    <Card.Title>{props.Player.Name}</Card.Title>
                    <Card.Text>
                        Nationality: {props.Player.Nationality}
                    </Card.Text>
                    <Card.Text>
                        JerseyNumber: {props.Player.JerseyNumber}
                    </Card.Text>
                    <Card.Text>
                        Team: {props.Player.Team}
                    </Card.Text>
                    <Card.Text>
                        Age: {props.Player.Age}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
Player.defaultProps={
    Player:{Name:"unknown player",Nationality:"tunisia",Age:0,Team:"unknown Team",JerseyNumber:99,Img:"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}
}
export default Player