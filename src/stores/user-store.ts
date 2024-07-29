import { defineStore } from 'pinia'
import { type User } from '../types'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      users: [] as User[] | null,
      activeUserModal: false,
      paginatedData: [] as User[] | null,
      genderFilter: '',
      perPage: 10,
      currentPage: 0
    }
  },
  actions: {
    async fetchRandomUsers() {
      const response = await fetch(
        `https://randomuser.me/api/?gender=${this.genderFilter}&results=10`
      )
      const data = await response.json()
      this.users?.push(...data.results)
      this.paginatedData = this.users.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    handleNextPagination() {
      this.currentPage++
      if (this.currentPage > this.users.length / this.perPage) {
        this.fetchRandomUsers()
      } else {
        this.paginatedData = this.users.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        )
      }
    },
    handleBackPagination() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.paginatedData = this.users.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        )
        console.log(this.currentPage)
      }
    }
  }
})
