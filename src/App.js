import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
    </div>
  );
}

export default App;
