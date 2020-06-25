// Import components and css
import './scss/app.scss';
import Navbar from './components/Navbar';
import Router from './components/Router';
require('bootstrap');

const App = () => {
  // Get navbar placeholder
  const nav = document.getElementById('nav');
  // Render navbar
  nav.innerHTML = Navbar.render(document.location.hash);
  // Event listeners for hash changes
  window.addEventListener('load', Router) || Router();
  window.addEventListener('hashchange', () => {
    Router();
    nav.innerHTML = Navbar.render(document.location.hash);
  });
};

App();
