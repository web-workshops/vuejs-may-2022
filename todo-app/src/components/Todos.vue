<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: [],
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((response) => {
          this.todos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
