"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

type Country = {
  code: string;
  name: string;
  emoji: string;
};

type CountriesData = {
  countries: Country[];
};

export default function Countries() {
  const { loading, error, data } =
    useQuery<CountriesData>(GET_COUNTRIES);

  if (loading) {
    return <p>Loading Countries...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6">
        Countries List
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {data?.countries.slice(0, 24).map((country) => (
          <div
            key={country.code}
            className="border rounded-lg p-4"
          >
            <div className="text-3xl">
              {country.emoji}
            </div>

            <p className="mt-2">
              {country.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}