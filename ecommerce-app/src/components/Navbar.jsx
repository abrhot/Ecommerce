import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <Link to="/">🏠 Home</Link>
      <div className="flex gap-4">
        <Link to="/products">🛍 Products</Link>
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
