// Basic component structure
const Navbar = {
  // Collapse navbar on mobile after click on link
  collapse: () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        if (
          e.target.parentNode.parentNode.parentNode.classList.contains('show')
        ) {
          e.target.parentNode.parentNode.parentNode.classList.toggle('show');
        }
      });
    });
  },
  // Render method
  render: () => {
    const template = `
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#/">My app</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarsExample04">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    return template;
  }
};
// Export component
export default Navbar;
