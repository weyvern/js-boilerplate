import './scss/app.scss';
import Navbar from './components/Navbar';
require('bootstrap');

const App = () => {
  const nav = document.getElementById('nav');
  nav.innerHTML = Navbar();
};

App();
