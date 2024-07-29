<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/user-store'
const props = defineProps(['user'])

const store = useUserStore()

const modalTextDisplay = ref(`${props.user.name.first} ${props.user.name.last}`)

function setTextDisplay(hoverIcon: string) {
  modalTextDisplay.value = hoverIcon
}

function exitModal() {
  store.activeUserModal = false
}
</script>

<template>
  <div class="modal-container">
    <div class="modal">
      <button class="exit" @click="exitModal">X</button>
      <div class="display-picture-container">
        <img class="display-picture" :src="$props.user.picture.large" alt="" />
      </div>
      <h1>{{ modalTextDisplay }}</h1>
      <footer>
        <div class="icon-container">
          <img
            class="icons"
            src="https://www.svgrepo.com/show/483912/person.svg"
            @mouseenter="setTextDisplay($props.user.name.first + ' ' + $props.user.name.last)"
          />
          <img
            class="icons"
            src="https://www.svgrepo.com/show/533290/phone-flip-alt.svg"
            @mouseenter="setTextDisplay($props.user.phone)"
          />
          <img
            class="icons"
            src="https://www.svgrepo.com/show/511921/email-1573.svg"
            @mouseenter="setTextDisplay($props.user.email)"
          />
          <img
            class="icons"
            src="https://www.svgrepo.com/show/532540/location-pin-alt-1.svg"
            @mouseenter="
              setTextDisplay(
                $props.user.location.street.number +
                  ' ' +
                  $props.user.location.street.name +
                  ', ' +
                  $props.user.location.city +
                  ', ' +
                  $props.user.location.state +
                  ', ' +
                  $props.user.location.country +
                  ', ' +
                  $props.user.location.postcode
              )
            "
          />
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
}

.display-picture-container {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-wrap: break-word;
  hyphens: auto;
}
.display-picture {
  width: 250px;
}

.icons {
  height: 100px;
  width: 100px;
}
.modal-container {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container {
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 20px 10px;
  padding: 0px 20px 0px 20px;
}
.modal {
  background-color: rgb(55, 107, 131);
  height: 600px;
  width: 900px;
  padding: 0px 0px 30px 0px;
  border-radius: 30px;
  border: 10px solid black;
}

.exit {
  color: white;
  font-weight: bold;
  font-size: x-large;
  display: flex;
  float: right;
  padding: 0px 0px 0px 0px;
  margin: 10px 10px 0px 0px;
  height: 50px;
  width: 50px;
  border: 2px solid black;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: red;
}
</style>
