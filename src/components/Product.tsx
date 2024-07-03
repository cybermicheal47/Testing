import Productimg from "../assets/product.png";
import "./Product.css";

const Product = () => {
  return (
    <>
      <div className="ProductCon">
        <div className="product">
          <div>
            <h1>ADIRE STYLES</h1>
          </div>

          <div className="productmini">
            <ol>
              <li>PRODUCT</li>
              <li>TOTAL</li>
            </ol>
          </div>
        </div>

        <div className="productMain">
          <div className="productMainCon">
            <div className="productBoxImg">
              <img src={Productimg} alt="Cart" className="prodimg" />
            </div>
            <div className="product-info">
              <div className="total">
                <h3>Adire Styles</h3>
                <h3> N80,000.00</h3>
              </div>
              <div className="productcheck">
                <p className="productP">Brand: Adire</p>
                <p className="productP">
                  Reviews:{" "}
                  <span>
                    <span style={{ color: "orange", fontSize: "1.5rem" }}>
                      ★
                    </span>
                    <span style={{ color: "orange", fontSize: "1.5rem" }}>
                      ★
                    </span>
                    <span style={{ color: "orange", fontSize: "1.5rem" }}>
                      ★
                    </span>
                    <span style={{ color: "grey", fontSize: "1.5rem" }}>★</span>
                    <span style={{ color: "grey", fontSize: "1.5rem" }}>★</span>
                  </span>
                </p>
                <p className="productP">
                  Quantity:{" "}
                  <input
                    type="number"
                    min="1"
                    value="2"
                    style={{ width: "70px", height: "40px" }}
                  />
                </p>
                <p className="price productP"> Price : N40,000.00</p>
                <button
                  style={{
                    backgroundColor: "#663399",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
