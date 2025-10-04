import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>💳 Checkout Page</h2>
      <p>Checkout form goes here (demo only).</p>
      <Link to="/order-confirmation" style={{ display: "inline-block", marginTop: "20px", padding: "10px 20px", background: "#0077cc", color: "white", borderRadius: "5px" }}>
        Place Order
      </Link>
    </div>
  );
}
