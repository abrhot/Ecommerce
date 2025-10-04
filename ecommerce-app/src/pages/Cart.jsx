import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🛒 Cart Page</h2>
      <p>Your cart is empty.</p>
      <Link to="/checkout" style={{ display: "inline-block", marginTop: "20px", padding: "10px 20px", background: "#0077cc", color: "white", borderRadius: "5px" }}>
        Proceed to Checkout
      </Link>
    </div>
  );
}
