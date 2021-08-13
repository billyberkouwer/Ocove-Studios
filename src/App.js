import './App.css';
import Navbar from './Navbar';
import HomeSection from './HomeSection';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="global-container">
        <HomeSection />
      </div>
    </div>
  );
}

export default App;
