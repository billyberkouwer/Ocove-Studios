import './App.css';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import ProjectSection from './ProjectSection';

function App() { 

  return (
    <div className="wrapper">
      <Navbar />
      <div className="global-container">
        <HomeSection />
        <ProjectSection />
      </div>
    </div>
  );
}

export default App;
