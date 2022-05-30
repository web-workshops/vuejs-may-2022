const myApp = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "iPhone 13",
      description:
        "iPhone 13 is the latest iPhone in the iPhone series. It is powered by a 2.84-GHz dual-core processor and has a camera system that can take up to 8 photos in a single burst.",
      // image: "iphone-13-blue.png",
      //inStock: false,
      // quantity: 5,
      specs: ["5G speed", "Edge-to-edge OLED display", "Ceramic Shield"],
      variants: [
        {
          ref: "ip13bl001",
          color: "blue",
          image: "iphone-13-blue.png",
          quantity: 5,
        },
        {
          ref: "ip13mn002",
          color: "black",
          image: "iphone-13-midnight.png",
          quantity: 12,
        },
        {
          ref: "ip13re003",
          color: "red",
          image: "iphone-13-red.png",
          quantity: 0,
        },
      ],
      activeVariant: 0,
    };
  },
  methods: {
    updateImage(newImage) {
      this.image = newImage;
    },
  },
  computed: {
    inStock() {
      if (this.variants[this.activeVariant].quantity > 5) {
        return "In Stock";
      } else if (this.variants[this.activeVariant].quantity > 0) {
        return "Limited Stock";
      } else {
        return "Out of Stock";
      }
    },
    image() {
      return this.variants[this.activeVariant].image;
    },
  },
});
myApp.mount("#app");
