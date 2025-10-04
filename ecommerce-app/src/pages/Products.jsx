import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Products() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      {products.map(product => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", width: "200px", textAlign: "center" }}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}`} style={{ color: "#0077cc" }}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
