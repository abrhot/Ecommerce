import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#0077cc", color: "white", display: "flex", justifyContent: "space-between" }}>
      <h1>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>EcommerceApp</Link>
      </h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/products" style={{ color: "white" }}>Products</Link>
        <Link to="/cart" style={{ color: "white" }}>Cart</Link>
      </div>
    </nav>
  );
}
