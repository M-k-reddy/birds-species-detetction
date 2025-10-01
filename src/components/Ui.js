// import React from 'react';
// import './Ui.css'; // Import the CSS file

// function Ui({ setCurrentSection }) {
//   return (
//     <div className="background-image">
//       <nav className="navbar">
//         <span className="logo">
//           <img src="/birdlogo.png" alt="Bird Logo" />
//           <p className='title'>Bird Audio Detector</p>
//         </span>
//         <ul className="nav-links">
//           <li><a href="#home" onClick={() => setCurrentSection('home')}>Home</a></li>
//           <li><a href="#about" onClick={() => setCurrentSection('about')}>About</a></li>
//           <li><a href="#contact" onClick={() => setCurrentSection('contact')}>Contact</a></li>
//           <li><a href="#search" onClick={() => setCurrentSection('search')}>Search...</a></li>
//         </ul>
//       </nav>

//       {/* Your content here */}
//     </div>
//   );
// }

// export default Ui;


import React from 'react';
import './Ui.css'; // Import the CSS file

function Ui({ currentSection, setCurrentSection }) {
  return (
    <div className="background-image">
      <nav className="navbar">
        <span className="logo">
          <img src="/birdlogo.png" alt="Bird Logo" />
          <p className='title'>Bird Species Detector</p>
        </span>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              onClick={() => setCurrentSection('home')}
              style={{ backgroundColor: currentSection === 'home' ? 'black' : 'transparent', color: currentSection === 'home' ? 'white' : 'black' }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setCurrentSection('about')}
              style={{ backgroundColor: currentSection === 'about' ? 'black' : 'transparent', color: currentSection === 'about' ? 'white' : 'black' }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setCurrentSection('contact')}
              style={{ backgroundColor: currentSection === 'contact' ? 'black' : 'transparent', color: currentSection === 'contact' ? 'white' : 'black' }}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#search"
              onClick={() => setCurrentSection('search')}
              style={{ backgroundColor: currentSection === 'search' ? 'black' : 'transparent', color: currentSection === 'search' ? 'white' : 'black' }}
            >
              Search...
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Ui;