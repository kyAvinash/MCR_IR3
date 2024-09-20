import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="container py-2">
          <img
            className="img-fluid mt-3"
            src="https://placehold.co/1200X400?text=1200+X+400"
            alt="Shpoie Main image"
          />
        </section>

        <section className="container mt-5 text-center">
          <h2>Shopie</h2>
          <p>Welcome to the Shopie application!</p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </section>

        <section className="container mt-5 text-center">
          <h2>Trending</h2>
          <p>Checkout our trending products</p>
        </section>

        <section className=" container mt-3 mb-5 text-center">
          <div className="row">
            <div className="col-md-4">
              <img src="https://placehold.co/300X300?text=300+X+300" alt="tranding image1" className="img-fluid"/>
            </div>

            <div className="col-md-4">
              <img src="https://placehold.co/300X300?text=300+X+300" alt="tranding image2" className="img-fluid"/>
            </div>

            <div className="col-md-4">
              <img src="https://placehold.co/300X300?text=300+X+300" alt="tranding image3" className="img-fluid"/>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
