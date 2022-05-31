<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar></Navbar>
    <RouterView class="container py-3" />
  </div>
</template>
