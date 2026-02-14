import Header from "../component/Header";
import Footer from "../component/Footer";
import ProductCard from "../component/ProductCard";
import "../index.css";

function Home() {
  const featuredPlants = [
    { img: "src/assets/Rose.jpg", name: "Rose", desc: "Classic", price: "₱250" },
    { img: "src/assets/Sampaguita.jpg", name: "Sampaguita", desc: "Typical", price: "₱180" },
    { img: "src/assets/Lily.jpg", name: "Lily", desc: "Elegant", price: "₱300" },
  ];

  return (
    <>
      <Header />

      <section className="hero" role="region" aria-label="Hero">
        <div className="hero-inner">
          <h1 className="hero-title">Harmonize with<br />the nature</h1>
          <p className="hero-sub">The nature's bounty within your reach</p>
          
          <div className="hero-ctas">
            {/* search bar soon (trust) */}
          </div>
        </div>
      </section>

      <main>
        <section className="featured" aria-label="Featured plants">
          <div className="container">
            <h2 className="section-title">Featured Plants: Best sellers</h2>
            <p className="section-sub">Limited selection: only Rose, Sampaguita and Lily.</p>
            
            <ul className="product-grid" role="list">
              {featuredPlants.map((plant) => (
                <ProductCard key={plant.name} {...plant} />
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home
