import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img:
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
          id: 1
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 10,
          img:
            "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          id: 2
        },
        {
          price: 999,
          title: "Laptop",
          qty: 4,
          img:
            "https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80",
          id: 3
        }
      ]
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  handleIncreaseQuantity = (product) => {
    console.log("Increase the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    });
  };

  handleDecreaseQuantity = (product) => {
    console.log("Decrease the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty !== 0) products[index].qty -= 1;

    this.setState({
      products
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal += product.qty * product.price;
    });
    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
