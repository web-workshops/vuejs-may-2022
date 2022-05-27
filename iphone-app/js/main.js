const myApp = Vue.createApp({
  data() {
    return {
      product: "iPhone 13",
      description:
        "iPhone 13 is the latest iPhone in the iPhone series. It is powered by a 2.84-GHz dual-core processor and has a camera system that can take up to 8 photos in a single burst.",
      image: "iphone-13-blue.png",
      //inStock: false,
      quantity: 5,
      specs: ["5G speed", "Edge-to-edge OLED display", "Ceramic Shield"],
      variants: [
        {
          ref: "ip13bl001",
          color: "blue",
          image: "iphone-13-blue.png",
        },
        {
          ref: "ip13mn002",
          color: "midnight",
          image: "iphone-13-midnight.png",
        },
        {
          ref: "ip13re003",
          color: "red",
          image: "iphone-13-red.png",
        },
      ],
    };
  },
  methods: {
    updateImage(newImage) {
      this.image = newImage;
    },
  },
});
myApp.mount("#app");
