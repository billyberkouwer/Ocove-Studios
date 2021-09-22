import './App.css';
import Navbar from './Navbar';
import ProjectSection from './ProjectSection';
import ServiceSection from './ServiceSection';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';

function App() { 

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
            <ProjectSection />
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