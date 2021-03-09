import React, { useContext, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { countryContext } from "../../App";
import Countries from "../Countries/Countries";

const Home = () => {
  const [country, setCountry] = useContext(countryContext);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      <h1>This is COuntry is: {country.length}</h1>
      <Container>
        <Row>
          {country.map((pd) => (
            <Countries pd={pd} key={pd.name}></Countries>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
