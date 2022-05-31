import reviewForm from "./ReviewForm.js";
import reviewList from "./ReviewList.js";

export default {
  template: `	
        <div class="review-zone">
            <review-form @review-submitted="onReviewSubmitted"></review-form>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        </div>
    `,
  components: {
    reviewForm,
    reviewList,
  },
  data() {
    return {
      reviews: [],
    };
  },
  methods: {
    onReviewSubmitted(reviewData) {
      const pseudo = reviewData.pseudo.trim();
      const reviewMessage = reviewData.reviewMessage.trim();
      if (pseudo.length === 0 || reviewMessage.length === 0) {
        alert("Please fill the form");
        return;
      }
      this.reviews.push(reviewData);
      alert("Thank you for your review!");
    },
  },
};
