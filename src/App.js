import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchEngine />
      </header>
      <footer className="App-footer">
        <p>
          This project was coded by
          <a
            href="https://www.shecodes.io/graduates/127780-jessie-polong"
            target="_blank"
            rel="noreferrer"
          >
            Shecodes
          </a>
          and is{" "}
          <a
            href="https://github.com/Comet429/weather-search-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>{" "}
          for{" "}
          <a
            href="https://app.netlify.com/sites/spontaneous-dragon-099add/overview"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
