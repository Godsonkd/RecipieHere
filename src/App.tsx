
import './App.css';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Contact} from './Components/Contact';

import { Recipies } from './Components/Recipies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Recipies />} />
        <Route path="/contact" element={<Contact/>} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  </Router>

  );
}

export default App;
