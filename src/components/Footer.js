import React from 'react';
import '../index.css'; // Make sure this file includes your styles

const Footer = () => {
  return (
    <footer>
      <div className="credits">
        Scott Hwang, Polling Editor<br />
        Yong-Yu Huang, Web Developer<br />
        Lily Ogburn, Editor in Chief<br /><br />
      </div>
      {/* <div className="logo-footer">
        <a href="https://dailynorthwestern.com" target="_blank" rel="noopener noreferrer">
          <img src="daily.png" alt="The Daily Northwestern Logo" />
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
