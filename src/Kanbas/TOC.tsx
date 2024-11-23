import React from 'react';

const TOC = () => {
  return (
    <div>
      <h1>Table of Contents</h1>
      
      {/* Add links to GitHub and Server */}
      <div>
        <h3>Links</h3>
        <ul>
          <li>
            <a href="https://github.com/Parthav-N/kanbas-node-server-app" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </li>
          <li>
            <a href="https://kanbas-node-server-app-u0y0.onrender.com/" target="_blank" rel="noopener noreferrer">
              Live Server on Render
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TOC;
