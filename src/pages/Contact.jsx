import Header from "../component/Header";
import Footer from "../component/Footer";
import "../index.css";

function Contact() {
  return (
    <>
      <Header />

      <section className="hero" role="region" aria-label="Hero">
        <div className="hero-inner">
          <h1 className="hero-title">Contact<br />Us</h1>
          <p className="hero-sub">
            Have questions about our plants or sustainability efforts?
            We’d love to hear from you.
          </p>
        </div>
      </section>

      <main>
        <section className="featured">
          <div className="container">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-sub">
              Reach out to us using the information below.
            </p>

            <div className="product-grid">
              <div className="product-card">
                <div className="product-body">
                  <h3 className="product-name">Email</h3>
                  <p className="product-desc">RhineLabs@gmail.com</p>
                </div>
              </div>

              <div className="product-card">
                <div className="product-body">
                  <h3 className="product-name">Phone</h3>
                  <p className="product-desc">+63 912 345 6789</p>
                </div>
              </div>

              <div className="product-card">
                <div className="product-body">
                  <h3 className="product-name">Location</h3>
                  <p className="product-desc">
                    Manila, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact
