import React, { useContext } from "react";
import { countryContext } from "./../../App";
import Countries from "./../Countries/Countries";
import { useParams } from "react-router";
import { Container, Row } from "react-bootstrap";

const Asia = () => {
  const { asia } = useParams();
  console.log(asia);
  const [country, setCountry] = useContext(countryContext);
  const demo = country.filter((pd) => pd.region === asia);
  console.log(demo);
  return (
    <div>
      <h1>Total country: {demo.length}</h1>
      <Container>
        <Row>
          {demo.map((pd) => (
            <Countries pd={pd} key={pd.name}></Countries>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Asia;
