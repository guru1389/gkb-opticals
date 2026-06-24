"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`;

console.log("Countries component rendered");

type Country = {
  code: string;
  name: string;
};

type CountriesData = {
  countries: Country[];
};

export default function Countries() {
  const { loading, error, data } =
    useQuery<CountriesData>(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div>
      {data?.countries.map((country) => (
        <p key={country.code}>
          {country.name}
        </p>
      ))}
    </div>
  );
}