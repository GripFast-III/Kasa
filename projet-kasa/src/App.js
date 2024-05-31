import Hello from "./Components/hello";
import Footer from "./Components/footer";
import "./Styles/app.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Roger" />
        <Hello name="tata" />
      </header>

      <Footer />
    </div>
  );
}

export default App;
