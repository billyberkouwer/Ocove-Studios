import './App.css';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import ProjectSection from './ProjectSection';
import ServiceSection from './ServiceSection';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() { 

  return (
    <Router >
      <div className="wrapper">
        <Navbar />
        <div className="global-container">
        <Switch>
          <Route exact path="/">
            <HomeSection />
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