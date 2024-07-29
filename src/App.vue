<script setup lang="ts">
import userList from './components/user-list.vue'

</script>

<template>
  <h1>Random User Generator</h1>
  <div>
    <userList></userList>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  h1 {
    text-align: center;
    margin-bottom: 0px;
  }
}
</style>
