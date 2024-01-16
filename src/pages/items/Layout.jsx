import { Link, Outlet, useLocation } from "react-router-dom";

function ItemsLayout() {
  const { pathname } = useLocation();

  return (
    <main>
      <h1>Stock Items</h1>
      <div className="tabs">
        <Link
          to="/items"
          className={`tab ${pathname === "/items" ? "active" : ""}`}
        >
          All item
        </Link>
        <Link
          to="/items/new"
          className={`tab ${pathname === "/items/new" ? "active" : ""}`}
        >
          New Item
        </Link>
      </div>
      <Outlet />
    </main>
  );
}
export default ItemsLayout;
