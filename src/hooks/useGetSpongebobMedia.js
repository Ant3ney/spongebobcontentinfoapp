import { useState, useEffect } from "react";

export default function useGetSpongebobMedia() {
  let [spongebobMedia, setSpongebobMedia] = useState(null);

  useEffect(() => {
    if (!spongebobMedia) {
      fetch(`https://www.omdbapi.com/?s=spongebob&apikey=46627e03`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setSpongebobMedia(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [spongebobMedia]);

  return !spongebobMedia ? spongebobMedia : spongebobMedia.Search;
}

/* curl "https://test.api.amadeus.com/v1/security/oauth2/token" \ -H "Content-Type: application/x-www-form-urlencoded" \ -d "grant_type=client_credentials&client_id=rYp7ARPSBZRWzZLw0Gl2KpzG3m6RsP4t&client_secret=baYaG0U1bRuOEvGT" */
