import './App.css';
import Projects from './projects.json';
import ProjectSection from './ProjectSection';
import ServiceSection from './ServiceSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import ScrollToTop from './scrollToTop';

function App() { 
    
  /* --- COMPOSE PROJECTS DATA FROM JSON --- */

  const projectTitles = [];
  const projectText = [];
  const projectImages = [];
  const projectLinkURLS = [];
  const projectLinks = [];
  
  (function () {
    for (var i in Projects) {
        const p = Projects[i];
        projectTitles.push(p.title);
        projectText.push(p.text);
        projectImages.push(p.images);
        projectLinkURLS.push(p.links.url);
        projectLinks.push(p.links.text);
     };
  })();


  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <div className="global-container">
          <ScrollToTop />
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/">
                    <LandingPage />
                  </Route>
                  <Route path="/projects">
                    <ProjectSection 
                      projectTitles={projectTitles} 
                      projectText={projectText} 
                      projectImages={projectImages}
                      projectLinkURLS={projectLinkURLS}
                      projectLinks={projectLinks}
                    />
                  </Route>
                  <Route path="/services">
                    <ServiceSection />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
      </div>
    </Router>
  );
}

export default App;