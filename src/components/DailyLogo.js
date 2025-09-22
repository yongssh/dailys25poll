// import React from 'react';
// import '../index.css';

// export function DailyLogo( {scrollToLanding}) {
//   return (
//     <header className="poll-header">
//         <div className="header sticky-header">
//         <a href="https://dailynorthwestern.com" className="daily-logo">
//         <img src="THE DAILY LOGO WHITE.png" alt="Daily Northwestern Logo" />
//       </a>
//       </div>

//      {/* <div className="title-background"> */}
//      {/* <h1 className="page-title">Spring 2025 Undergraduate Poll</h1> */}
//      <div className="header-image">
//       <img src="SpringCampusPoll.jpg" />
//       <a
//         href="https://dailynorthwestern.com/2025/05/07/campus/s25-poll/"
//         className="story-link"
//       >
//         Back to story
//       </a>

//       <div className="bouncing-arrow">
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 16L6 10H18L12 16Z" />
//   </svg>
// </div>
//    </div>
//    </header>
//   );
// }

// export default DailyLogo;

import React from 'react';
import '../index.css';

export function DailyLogo({ scrollToRef, targetRef }) {
  return (
    <header className="poll-header">
      <div className="header sticky-header">
      </div>

      <div className="header-image">
        {/* Background image */}
        <img className="background-image" src="SpringCampusPoll.jpg" alt="Poll header background" />

        {/* OVERLAID LOGO BLOCK */}
        <div className="logo-overlay">
          <a href="https://dailynorthwestern.com" className="daily-logo">
            <img src="THE DAILY LOGO WHITE.png" alt="Daily Northwestern Logo" />
          </a>
        </div>

       {/* Bottom overlays with arrow + link */}
                <div className="bottom-overlay-container">
          <a
            href="https://dailynorthwestern.com/2025/05/07/campus/s25-poll/"
            className="back-link-overlay"
          >
            Back to story
          </a>

          <div
            className="arrow-overlay"
            onClick={() => scrollToRef(targetRef)}
          >
            ↓
          </div>
        </div>
          

  
       
      </div>
    </header>
  );
}

export default DailyLogo;

