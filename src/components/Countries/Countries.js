import React, { useContext } from "react";

import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { countryContext } from "./../../App";

const Countries = (props) => {
  const [country, setCountry] = useContext(countryContext);
  const { name, capital, flag } = props.pd;
  return (
    <Col xs className="col-md-6 col-lg-3 col-sm-12  p-3 justify-content-center">
      <Card className="">
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <div className="text-center">
            <Card.Title> {name} </Card.Title>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="text-center">
            <Link to={`/country/${name}`}>
              <Button variant="primary">Country Details</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
    // </Row>
  );
};

export default Countries;
