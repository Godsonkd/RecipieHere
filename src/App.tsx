
import './App.css';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';

import { Recipies } from './Components/Recipies';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Recipies />

    </div>
  );
}

export default App;
