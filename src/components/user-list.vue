<script setup lang="ts">
import { useUserStore } from '../stores/user-store'
import userListModal from './user-modal.vue'
import { ref } from 'vue'
import { type User } from '../types'

const store = useUserStore()

const currentUser = ref<User | null>(null)

function activateModal(user: User) {
  store.activeUserModal = true
  currentUser.value = user
}

function changeGenderFilter() {
  store.users = []
  store.paginatedData = []
  store.currentPage = 0
}
</script>

<template>
  <div class="gender-filter-container">
    <label for="gender-filter">Select Gender</label>
    <select id="gender-filter" v-model="store.genderFilter" @change="changeGenderFilter">
      <option value="">Any</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
  <div class="pagination-button-container">
    <button class="pagination-button" @click="store.handleBackPagination">Previous</button>
    <button class="pagination-button" @click="store.handleNextPagination">Next</button>
  </div>
  <ul>
    <div class="user-list-container">
      <li v-for="user in store.paginatedData" :key="user?.login.username">
        <div class="user-container" @click="activateModal(user)">
          <div>
            <img :src="user.picture.large" />
          </div>
          <div>
            <h2 style="font-weight: bold">{{ user.name.first + ' ' + user.name.last }}</h2>
            <p>{{ 'Age: ' + user.dob.age }}</p>
            <p>{{ 'Gender: ' + user.gender[0].toUpperCase() }}</p>
          </div>
        </div>
      </li>
      <userListModal v-if="store.activeUserModal" :user="currentUser"></userListModal>
    </div>
  </ul>
</template>

<style scoped>
h2 {
  margin-top: 10px;
  margin-bottom: 3px;
  font-size: 2.5rem;
}

p {
  margin: 0px;
  font-size: 2rem;
}

.pagination-button {
  border-radius: 8px;
  width: 48%;
  margin-left: 5px;
  font-weight: bold;
}
.user-list-container {
  display: grid;
  text-align: center;
  margin: auto;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 5px;
  overflow-wrap: break-word;
  hyphens: auto;
}

.user-container {
  border: 5px solid black;
  padding: 10px 0px 0px 0px;
  text-align: center;
  border-radius: 12px;
  background-color: #8ac7db;
  height: 340px;
}

.pagination-button-container {
  text-align: center;
}

.gender-filter-container {
  display: flex;
  justify-content: right;
  margin-bottom: 5px;
}

label {
  margin-right: 5px;
}
</style>
