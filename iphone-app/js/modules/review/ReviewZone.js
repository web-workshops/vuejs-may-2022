import reviewForm from "./ReviewForm.js";
import reviewList from "./ReviewList.js";

export default {
  template: `	
        <div class="review-zone">
            <review-form></review-form>
            <review-list></review-list>
        </div>
    `,
  components: {
    reviewForm,
    reviewList,
  },
};
