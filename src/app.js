// Import components and css
import './scss/app.scss';
import Router from './components/Router';
import Navbar from './components/Navbar';
require('bootstrap');

const App = () => {
  // Get navbar placeholder
  const nav = document.getElementById('nav');
  // Render navbar
  nav.innerHTML = Navbar.render();
  // Event listener for navbar collapse
  document.addEventListener('DOMContentLoaded', Navbar.collapse);
  // Event listeners for router
  window.addEventListener('load', Router) || Router();
  window.addEventListener('hashchange', Router);
};

App();
