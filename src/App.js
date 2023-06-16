
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import './sass/homepage.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AboutUsPage from './pages/AboutUsPage';
import TestPage from './pages/TestPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/testlink" element={<TestPage />} />
      </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
