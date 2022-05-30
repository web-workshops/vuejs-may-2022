export default {
  template: `
      <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="'./images/'+image" :alt="product" />
        </div>
        <div class="product-info">
          <h2>{{product}}</h2>
          <p>{{description}}</p>
          <!-- <p v-if="inStock">In stock</p>
          <p v-else>Out of Stock</p> -->
          <!-- <p v-if="quantity > 5">In stock</p>
          <p v-else-if="(quantity > 0) && (quantity <=5)">Almost sold out</p>
          <p v-else>Out of Stock</p> -->
          <p>{{ stockStatus }}</p>
          <ul>
            <li v-for="spec in specs" :key="spec">{{spec}}</li>
          </ul>
          <div
            v-for="(variant, index) in variants"
            :key="variant.ref"
            @mouseover="activeVariant = index"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
          ></div>
          <button
            @click="$emit('add-to-cart')"
            class="button"
            :disabled="!inStock"
            :class="{ disabledButton : !inStock }"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
    `,
  data() {
    return {
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
  computed: {
    stockStatus() {
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
    inStock() {
      return this.variants[this.activeVariant].quantity > 0;
    },
  },
};
