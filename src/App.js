import './App.css';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import gsap from 'gsap';

function App() { 
  window.addEventListener("scroll", function(e) {
    let y = window.pageYOffset;
    console.log(y)
  });

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
