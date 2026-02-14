import Header from "../component/Header";
import Footer from "../component/Footer";
import "../index.css";

const receipt = {
  date: "January 27, 2026",
  payment: "Gcash",
  status: "Pending",
  items: [
    { id: 1, name: "Sunflower", qty: 10, price: 50 },
    { id: 2, name: "Peashooter", qty: 1, price: 100 },
    { id: 3, name: "PotatoMine", qty: 67, price: 25 },
  ],
};

export default function TransactionConfirmation() {
  const totalAmount = receipt.items.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <>
      <Header />

      <section className="alt-hero" role="region" aria-label="Hero">
        <div className="hero-inner">
        </div>
      </section>

      <main className="receipt-section">
        <h1>E-Receipt</h1>

        <section>
          <div><strong>Date:</strong> {receipt.date}</div>
          <div><strong>Payment:</strong> {receipt.payment}</div>
          <div><strong>Status:</strong> {receipt.status}</div>
        </section>

        <section>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {receipt.items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>₱{item.price}</td>
                  <td>₱{item.qty * item.price}</td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="3" className="text-right"><strong>Total</strong></td>
                <td><strong>₱{totalAmount}</strong></td>
              </tr>
            </tfoot>
          </table>
        </section>

        <br />
        <a className="btn-sm" href="/">Confirm Order</a>
      </main>

      <Footer />
    </>
  );
}
