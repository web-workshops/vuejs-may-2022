const myApp = Vue.createApp({
  data() {
    return {
      product: "iPhone 13",
      description:
        "iPhone 13 is the latest iPhone in the iPhone series. It is powered by a 2.84-GHz dual-core processor and has a camera system that can take up to 8 photos in a single burst.",
      image: "./images/iphone-13-blue.png",
    };
  },
});
myApp.mount("#app");
