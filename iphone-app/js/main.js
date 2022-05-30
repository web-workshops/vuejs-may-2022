import navbarComponent from "./modules/Navbar.js";
import cartComponent from "./modules/Cart.js";
import productComponent from "./modules/Product.js";

const myApp = Vue.createApp({
  data() {
    return {
      cart: 0,
    };
  },
});
myApp.component("navbar-component", navbarComponent);
myApp.component("cart-component", cartComponent);
myApp.component("product-component", productComponent);

myApp.mount("#app");
