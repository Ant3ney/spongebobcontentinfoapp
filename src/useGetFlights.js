import { useState, useEffect } from "react";

export default function useGetFlights() {
  let [flightData, setFlightData] = useState(null);

  useEffect(() => {
    if (!flightData) {
      fetch(
        `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer EQY17VdTh2skyH8S9dDFgoriSV0C",
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setFlightData(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [flightData]);

  return flightData;
}

/* curl "https://test.api.amadeus.com/v1/security/oauth2/token" \ -H "Content-Type: application/x-www-form-urlencoded" \ -d "grant_type=client_credentials&client_id=rYp7ARPSBZRWzZLw0Gl2KpzG3m6RsP4t&client_secret=baYaG0U1bRuOEvGT" */
