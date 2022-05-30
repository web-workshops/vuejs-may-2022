export default {
  template: `
    <form class="review-form">
        <h3>Drop a review</h3>
        <label for="pseudo">Pseudo:</label>
        <input v-model="pseudo" type="text">

        <label for="review">Your review:</label>
        <textarea v-model="review" id="review"></textarea>

        <label for="rating">Rating</label>
        <input v-model.number="rating" type="range" id="rating" min="1" max="5">

        <input type="submit" value="Submit" class="button">
    </form>
  `,
};
