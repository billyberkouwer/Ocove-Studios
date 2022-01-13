import { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading.js';
import Projects from './projects.json';
import ProjectSection from './ProjectSection';
import ServiceSection from './ServiceSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LandingPage from './LandingPage';
import Navbar from './Navbar';

function App() {

  /* --- COMPOSE PROJECTS DATA FROM JSON --- */

  const projectTitles = [];
  const projectText = [];
  const projectImages = [];
  const projectCreditURLS1 = [];
  const projectCredits1 = [];
  const projectCreditURLS2 = [];
  const projectCredits2 = [];
  const projectLinkURLS = [];
  const projectLinks = [];

  (function () {
    for (var i in Projects) {
      const p = Projects[i];
      projectTitles.push(p.title);
      projectText.push(p.text);
      projectImages.push(p.images);
      projectCreditURLS1.push(p.credits1.url);
      projectCredits1.push(p.credits1.text);
      projectCreditURLS2.push(p.credits2.url);
      projectCredits2.push(p.credits2.text);
      projectLinkURLS.push(p.links.url);
      projectLinks.push(p.links.text);
    };
  })();

  // LOADING HOOKS (TEMP)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);


  return (
    <>
      {
        loading ?
            <Loading />
          :
          <Router>
            <div className="wrapper">
              <Navbar />
              <div className="global-container">
                {/* <ScrollToTop /> */}
                <Route render={({ location }) => (
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

                            projectCreditURLS1={projectCreditURLS1}
                            projectCredits1={projectCredits1}
                            projectCreditURLS2={projectCreditURLS2}
                            projectCredits2={projectCredits2}

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
      }
    </>
  );

}

export default App;