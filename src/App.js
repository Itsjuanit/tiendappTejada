import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="300"/>
        <p>Desafio de CODER HOUSE</p>

        <a
          className="App-link"
          href="https://www.coderhouse.com/online/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          APRENDE REACT
        </a>

      <a
        className="juani"
        href="https://portfolio-itsjuanit.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Itsjuanit
      </a>
      </header>
    </div>
  );
}

export default App;
