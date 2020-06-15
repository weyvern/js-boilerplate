// Import compoments
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
// Routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];
// Remove hash from location
const parseLocation = (hash) => hash.slice(1).toLowerCase() || '/';
// Get component based on location
const findComponentByPath = (path) =>
  routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || false;
// Define target element to render in
const app = document.getElementById('app');
const Router = () => {
  //Pass current location to remove hash
  const path = parseLocation(document.location.hash);
  // Destructure result of search into a component constant or assign default
  const { component = NotFound } = findComponentByPath(path, routes) || {};
  // Render component
  app.innerHTML = component.render();
};
// Export component
export default Router;
