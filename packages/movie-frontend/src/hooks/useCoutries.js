import { useState, useEffect } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((_countries) =>
        setCountries(
          _countries.map((country) => ({
            value: country.name.common,
            image: country.flags.png,
            label: country.name.common,
            description: country.name.official,
          }))
        )
      );
  }, []);

  return countries;
};

export default useCountries;
