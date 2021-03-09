import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Button, Card, Jumbotron } from "react-bootstrap";
import { useParams } from "react-router";
import { countryContext } from "./../../App";
import { Link } from "react-router-dom";

const CountryDetails = () => {
  const { countryId } = useParams();
  //   const [country, setCountry] = useContext(countryContext);
  //   console.log(country.length);
  const [details, setDetails] = useState({});
  const {
    name,
    capital,
    flag,
    region,
    nativeName,
    population,
    callingCodes,
    area,
  } = details;
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
  }, []);
  const center = {
    width: "400px",
    margin: "auto",
  };
  return (
    <div style={center}>
      <Card className="text-center" style={{ width: "24rem" }}>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>Capital: {capital}</p>
          <p>Region: {region}</p>
          <p>Population: {population}</p>
          <p>
            Area: {area}
            <sup>2</sup> km
          </p>
          <p>Native Name: {nativeName}</p>

          <p>Country Code: {callingCodes}</p>
          <Link to="/home">
            <Button variant="primary">Back to Home </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountryDetails;
