import React, { useContext } from "react";
import { countryContext } from "./../../App";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  const [country, setCountry] = useContext(countryContext);

  const asia = "Asia";
  const africa = "Africa";
  const antarctica = "Antarctica";
  const australia = "Australia";
  const europe = "Europe";
  const northAmerica = "Northern America";
  return (
    <div className="m-3 ">
      <Link to={`/${africa}/country`}>
        <Button className="m-2">Africa</Button>
      </Link>
      <Link to={`/${antarctica}/country`}>
        <Button className="m-2">Antarctica</Button>
      </Link>

      <Link to={`/${asia}/country`}>
        <Button className="m-2">Asia</Button>
      </Link>

      <Link to={`/${australia}/country`}>
        <Button className="m-2">Australia</Button>
      </Link>
      <Link to={`/${europe}/country`}>
        <Button className="m-2">Europe</Button>
      </Link>
      <Link to={`/${northAmerica}/country`}>
        <Button className="m-2">North-America</Button>
      </Link>

      <Button className="m-2">South-America</Button>
    </div>
  );
};

export default Header;
