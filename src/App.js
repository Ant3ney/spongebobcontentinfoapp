import "./App.css";
import useGetFlights from "./useGetFlights";
import useGetSpongebobMedia from "./hooks/useGetSpongebobMedia";

function App() {
  let flightData = useGetFlights();
  let spongebobMedia = useGetSpongebobMedia();

  console.log(spongebobMedia);

  return (
    <div className="App">
      <h1>Welcome to the Spongebob info app!</h1>
      <div className="sponge-grid-container">
        {spongebobMedia ? (
          spongebobMedia.map((media, i) => {
            return (
              <div className="sponge-container">
                <h2>{media.Title}</h2>
                <img src={media.Poster} alt="spongebob media" />
                <div className="info-box">
                  <p>{media.Year}</p>&nbsp;<p>{media.Type}</p>
                </div>
                <button
                  onClick={() => {
                    window.location.href = `https://www.imdb.com/title/${media.imdbID}`;
                  }}
                >
                  Learn More
                </button>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
