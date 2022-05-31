export default {
  template: `
    <form class="review-form" @submit.prevent="onSubmitReview">
        <h3>Drop a review</h3>
        <label for="pseudo">Pseudo:</label>
        <input v-model="pseudo" type="text">

        <label for="review">Your review:</label>
        <textarea v-model="reviewMessage" id="review"></textarea>

        <label for="rating">Rating</label>
        <input v-model.number="rating" type="range" id="rating" min="1" max="5">

        <input type="submit" value="Submit" class="button">
    </form>
  `,
  data() {
    return {
      pseudo: "",
      reviewMessage: "",
      rating: 3,
    };
  },
  methods: {
    onSubmitReview() {
      const reviewData = {
        pseudo: this.pseudo,
        reviewMessage: this.reviewMessage,
        rating: this.rating,
      };
      this.$emit("review-submitted", reviewData);
      this.pseudo = "";
      this.reviewMessage = "";
      this.rating = 3;
    },
  },
};
