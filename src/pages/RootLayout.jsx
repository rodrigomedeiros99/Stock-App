import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          REACT STOCK
        </Link>
        <nav>
          <Link to="/">Inicial</Link>
          <Link to="/items">Items</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Rodrigo Medeiros, All right Reserved &copy;React and React Router DOM.
      </footer>
    </>
  );
}

export default RootLayout;
