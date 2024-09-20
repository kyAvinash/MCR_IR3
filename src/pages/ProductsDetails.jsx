import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductsDetails = () => {
  const productId = useParams();

  const products = [
    {
      id: 1,
      name: "Smartphone",
      description: "Description of Smartphone",
      price: 500,
      productImg1: "https://placehold.co/200x200?text=Image+1",
      productImg2: "https://placehold.co/200x200?text=Image+2",
      productImg3: "https://placehold.co/200x200?text=Image+3",
    },
    {
      id: 2,
      name: "Laptop",
      description: "Description of Laptop",
      price: 1200,
      productImg1: "https://placehold.co/200x200?text=Image+1",
      productImg2: "https://placehold.co/200x200?text=Image+2",
      productImg3: "https://placehold.co/200x200?text=Image+3",
    },
    {
      id: 3,
      name: "Headphones",
      description: "Description of Headphones",
      price: 100,
      productImg1: "https://placehold.co/200x200?text=Image+1",
      productImg2: "https://placehold.co/200x200?text=Image+2",
      productImg3: "https://placehold.co/200x200?text=Image+3",
    },
    {
      id: 4,
      name: "Tablet",
      description: "Description of Tablet",
      price: 300,
      productImg1: "https://placehold.co/200x200?text=Image+1",
      productImg2: "https://placehold.co/200x200?text=Image+2",
      productImg3: "https://placehold.co/200x200?text=Image+3",
    },
    {
      id: 5,
      name: "Camera",
      description: "Description of Camera",
      price: 800,
      productImg1: "https://placehold.co/200x200?text=Image+1",
      productImg2: "https://placehold.co/200x200?text=Image+2",
      productImg3: "https://placehold.co/200x200?text=Image+3",
    },
    {
      id: 6,
      name: "Monitor",
      description: "Description of Monitor",
      price: 600,
      productImg1: "https://placehold.co/200x200?text=Image+1",
      productImg2: "https://placehold.co/200x200?text=Image+2",
      productImg3: "https://placehold.co/200x200?text=Image+3",
    },
    {
      id: 7,
      name: "Smartwatch",
      description: "Description of Smartwatch",
      price: 250,
      productImg1: "https://placehold.co/200x200?text=Image+1",
      productImg2: "https://placehold.co/200x200?text=Image+2",
      productImg3: "https://placehold.co/200x200?text=Image+3",
    },
    {
      id: 8,
      name: "Printer",
      description: "Description of Printer",
      price: 350,
      productImg1: "https://placehold.co/200x200?text=Image+1",
      productImg2: "https://placehold.co/200x200?text=Image+2",
      productImg3: "https://placehold.co/200x200?text=Image+3",
    },
    {
      id: 9,
      name: "Speaker System",
      description: "Description of Speaker System",
      price: 400,
      productImg1: "https://placehold.co/200x200?text=Image+1",
      productImg2: "https://placehold.co/200x200?text=Image+2",
      productImg3: "https://placehold.co/200x200?text=Image+3",
    },
    {
      id: 10,
      name: "Wireless Router",
      description: "Description of Wireless Router",
      price: 80,
      productImg1: "https://placehold.co/200x200?text=Image+1",
      productImg2: "https://placehold.co/200x200?text=Image+2",
      productImg3: "https://placehold.co/200x200?text=Image+3",
    },
  ];

  const productData = products.find(
    (product) => product.id == productId.productId
  );
  //console.log(productData);
  return (
    <>
      <Header />
      <main className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h2 className="mt-2">Product Details</h2>
                <div className="row mt-4">
                  <div className="col-md-3">
                    <img
                      src={productData.productImg1}
                      alt={productData.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={productData.productImg2}
                      alt={productData.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={productData.productImg3}
                      alt={productData.name}
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p>ID: {productData.id}</p>
                  <p>Name: {productData.name}</p>
                  <p>Description: {productData.description}</p>
                  <p>Price: INR {productData.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsDetails;
