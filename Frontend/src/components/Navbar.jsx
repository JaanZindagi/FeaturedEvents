const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">Dynamic360</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#footer">Contact</a></li> {/* changed here */}
      </ul>
    </div>
  </nav>
);

export default Navbar;
