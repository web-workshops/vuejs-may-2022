import app from "./app.js";
import navbarComponent from "./modules/Navbar.js";
import cartComponent from "./modules/Cart.js";
import productComponent from "./modules/Product.js";

const myApp = Vue.createApp(app);

myApp.component("navbar-component", navbarComponent);
myApp.component("cart-component", cartComponent);
myApp.component("product-component", productComponent);

myApp.mount("#app");
