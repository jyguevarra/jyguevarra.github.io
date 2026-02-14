import Header from "../component/Header";
import Footer from "../component/Footer";
import "../index.css";

const orders = [
  {
    id: 1,
    name: "Sunflower",
    desc: "Meta fr fr",
    img: "src/assets/Sunflower.png",
    price: 250,
    quantity: 10,
    confirmLink: "/PaymentDelivery"
  },

  {
    id: 2,
    name: "Peashooter",
    desc: "You can't beat the game without placing one!",
    img: "src/assets/Peashooter.png",
    price: 100,
    quantity: 1,
    confirmLink: "/PaymentDelivery"
  },

  {
    id: 3,
    name: "Potato Mine",
    desc: "Goated starter",
    img: "src/assets/Potato_Mine.png",
    price: 1675,
    quantity: 67,
    confirmLink: "/PaymentDelivery"
  },
];

function ShoppingCart() {
  return (
    <>
      <Header />

      <section className="alt-hero" role="region" aria-label="Hero">
        <div className="hero-inner"></div>
      </section>

      <main>
        <section className="featured">
          <div className="container">
            <h2 className="section-title">Your Orders</h2>

            <ul className="product-grid" role="list">
              {orders.map(order => (
                <li key={order.id} className="product-card" role="listitem">
                  <div className="product-media">
                    <img src={order.img} alt={order.name} onError={(e) => (e.target.style.display = "none")} />
                  </div>
                  <div className="product-body">
                    <h3 className="product-name">{order.name}</h3>
                    <p className="product-desc">{order.desc}</p>
                    <div className="product-meta">
                      <span className="price">Total: ₱{order.price}</span>
                      <a className="btn-sm" href={order.confirmLink}>Confirm Order</a>
                    </div>
                    <div className="product-meta">
                      <span className="quantity">Quantity: {order.quantity}</span>
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

export default ShoppingCart
