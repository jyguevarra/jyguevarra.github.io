import Header from "../component/Header";
import Footer from "../component/Footer";
import "../index.css";

const products = [
  { id: 1, name: "Rose", desc: "Classic", price: 250, img: "src/assets/Rose.jpg" },
  { id: 2, name: "Sampaguita", desc: "Typical", price: 180, img: "src/assets/Sampaguita.jpg" },
  { id: 3, name: "Lily", desc: "Elegant", price: 300, img: "src/assets/Lily.jpg" },
  { id: 4, name: "Sunflower", desc: ":]", price: 50, img: "src/assets/Sunflower.png" },
  { id: 5, name: "Peashooter", desc: "Pop", price: 100, img: "src/assets/Peashooter.png" },
  { id: 6, name: "Potato Mine", desc: "Kaboom!", price: 25, img: "src/assets/Potato_Mine.png" },
];

function ProductCatalog() {
  return (
    <>
      <Header />

      <section className="alt-hero" role="region" aria-label="Hero">
      </section>

      <main>
        <section className="featured" aria-label="Featured plants">
          <div className="container">
            <h2 className="section-title">Products</h2>

            <ul className="product-grid" role="list">
              {products.map(product => (
                <li key={product.id} className="product-card" role="listitem">
                  <div className="product-media">
                    <img
                      src={product.img}
                      alt={`${product.name} plant`}
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                  <div className="product-body">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.desc}</p>
                    <div className="product-meta">
                      <span className="price">₱{product.price}</span>
                      <a className="btn-sm" href="/shoppingCart">Add to cart</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProductCatalog