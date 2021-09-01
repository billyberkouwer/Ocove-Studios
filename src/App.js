import './App.css';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import ProjectSection from './ProjectSection';
import ServiceSection from './ServiceSection';

function App() { 

  return (
    <div className="wrapper">
      <Navbar />
      <div className="global-container">
        <HomeSection />
        <ProjectSection />
        <ServiceSection />
      </div>
    </div>
  );
}

export default App;
