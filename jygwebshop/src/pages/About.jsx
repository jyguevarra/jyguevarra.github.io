import Header from "../component/Header";
import Footer from "../component/Footer";
import "../index.css";

function About() {
  return (
    <>
      <Header />

      <section className="hero" role="region" aria-label="Hero">
        <div className="hero-inner">
          <h1 className="hero-title">About<br />Rhine Labs</h1>
        </div>
      </section>

      <main>
        <section className="featured">
          <div className="container">
            <h2 className="section-title">Who We Are</h2>
            <p className="section-sub">
              A bunch of slightly sleep-deprived scientists who still care enough to grow moss on lab walls 
              and name every fern in the backroom. We’re Rhine Lab’s oddballs with soil under our nails and 
              data logs full of plant chatter.
            </p>

            <h2 className="section-title">Our Mission</h2>
            <p>
              Not just to keep ecosystems alive… but to make them <em>thrive</em> even in cracked 
              concrete and stale air vents. If nature can bloom where no one expects it, then 
              maybe hope can too.
            </p>

            <h2 className="section-title">Why Plants?</h2>
            <p>
              Because they don’t lie. They don’t scheme or pretend equality exists 
              when it doesn’t. They just grow or they don’t and that honesty? 
              That’s something worth protecting.
            </p>
          </div>

          <br />
          <p className="placeholder-note">
            This whole section is taken from a fictional story which this store is based on to serve as a placeholder
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About
