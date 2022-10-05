import "./App.css";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
