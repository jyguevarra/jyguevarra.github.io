import Header from "../component/Header";
import Footer from "../component/Footer";
import "../index.css";

function PaymentDelivery() {
  return (
    <>
      <Header />

      <section className="alt-hero" role="region" aria-label="Hero">
        <div className="hero-inner">
          {/* Optional hero content */}
        </div>
      </section>

      <main className="receipt-section">
        <div className="hero-inner">
          <h1 className="hero-title">Payment & Delivery</h1>
          <p className="hero-sub">Choose your payment method and delivery option</p>
        </div>

        <section className="container">
          <form>
            <div className="payment-section">
              <h2>Select Payment Method</h2>
              <div className="payment-options">
                <label>
                  <input type="radio" name="payment" value="cod" defaultChecked />
                  Cash on Delivery
                </label>
                <label>
                  <input type="radio" name="payment" value="card" />
                  Credit/Debit Card
                </label>
                <label>
                  <input type="radio" name="payment" value="gcash" />
                  GCash
                </label>
                <label>
                  <input type="radio" name="payment" value="paypal" />
                  PayPal
                </label>
              </div>
            </div>

            <div className="delivery-section">
              <h2>Select Delivery Option</h2>
              <div className="delivery-options">
                <label>
                  <input type="radio" name="delivery" value="standard" defaultChecked />
                  Standard Delivery (3-5 days) - ₱50
                </label>
                <label>
                  <input type="radio" name="delivery" value="express" />
                  Express Delivery (1-2 days) - ₱100
                </label>
                <label>
                  <input type="radio" name="delivery" value="pickup" />
                  Store Pickup (Free)
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-sm">Proceed to Confirmation</button>
              <a href="/shoppingCart" className="btn btn">Back to Cart</a>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PaymentDelivery
