import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchEngine />
      </header>
      <footer>
        <a href="">Open sourced code</a>, by <a herf="">Jessie Polong</a> for{" "}
        <a herf="">SheCodes</a>
      </footer>
    </div>
  );
}

export default App;
