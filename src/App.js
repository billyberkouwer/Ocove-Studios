import './App.css';
import Navbar from './Navbar';
import Projects from './projects.json';
import ProjectSection from './ProjectSection';
import ServiceSection from './ServiceSection';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';

function App() { 
    
  /* --- COMPOSE PROJECTS DATA FROM JSON --- */

  const projectObjects = [];
  const projectTitles = [];
  const projectText = [];
  const projectImages = [];

  for (var i in Projects) {
      projectObjects.push(Projects[i]);
  };

  function produceProjectArrays() {
      for (let i = 0; i < projectObjects.length; i++) {
          const element = projectObjects[i];
          projectTitles.push(element.title);
          projectText.push(element.text);
          projectImages.push(element.images);
      }
  };

  produceProjectArrays();

  return (
    <Router >
      <div className="wrapper">
        <Navbar />
        <div className="global-container">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/projects">
            <ProjectSection projectTitles={projectTitles} projectText={projectText} />
          </Route>
          <Route path="/services">
            <ServiceSection />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;