import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Today from "./components/Today/Today";
import News from "./components/News/News";
import WeatherMap from "./components/WeatherMap/WeatherMap";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/news" element={<News />} />
          <Route path="/weathermap" element={<WeatherMap/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
