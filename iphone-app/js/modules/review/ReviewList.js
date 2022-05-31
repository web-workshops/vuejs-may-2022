export default {
  template: `
  <div class="review-container">
  <h3>Reviews:</h3>
  <ul>
      <li v-for="(review, index) in reviews" :key="index">
      {{ review.pseudo }} gave this {{ review.rating }} stars
      <br/>
      "{{ review.reviewMessage }}"
      <br/>
      </li>
  </ul>
  </div>
  `,
  props: ["reviews"],
};
