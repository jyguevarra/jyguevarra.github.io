function ProductCard({ img, name, desc, price }) {
  return (
    <li className="product-card" role="listitem">
      <div className="product-media">
        <img src={img} alt={`${name} plant`} onError={(e) => (e.target.style.display = "none")} />
      </div>
      
      <div className="product-body">
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{desc}</p>
        
        <div className="product-meta">
          <span className="price">{price}</span>
          <a className="btn-sm" href="#">
            Add to cart
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProductCard