<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import Loader from '../components/Loader.vue'

const authStore = useAuthStore()
const router = useRouter()

const email = ref()
const password = ref()

const signup = async () => {
  await authStore.auth({ email: email.value, password: password.value }, 'signup')
  router.push('/cars')
}

const back = () => {
  router.push('/')
}
</script>
<template>
  <div class="background h-screen w-full">
    <Message v-if="authStore.error" severity="warn">{{ authStore.error }}</Message>
    <form class="flex flex-column gap-2" style="margin-left: 29%; padding: 140px">
      <h2 style="color: azure">Signup</h2>
      <div class="p-inputgroup flex-1 w-15rem">
        <span class="p-inputgroup-addon">
          <i class="pi pi-user"></i>
        </span>
        <InputText type="email" v-model="email" placeholder="Your Email"></InputText>
      </div>
      <div class="p-inputgroup flex-1 w-15rem">
        <span class="p-inputgroup-addon">
          <i class="pi pi-at"></i>
        </span>
        <InputText type="password" v-model="password" placeholder="Password"></InputText>
      </div>
      <Loader v-if="authStore.loader" />
      <div v-else class="flex flex-column gap-2 w-15rem">
        <Button class="bgColor" label="Signup" @click="signup"></Button>
        <Button class="bgColor" label="Back Home" @click="back"></Button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.background {
  background: url('https://repost.uz/storage/uploads/23-1663901982-avto11-post-material.jpeg')
    center center no-repeat;
  background-size: cover;
  overflow: hidden;
  min-height: 100vh;
  margin: 0;
}
.bgColor {
  background-color: rgb(187, 30, 30);
}
.p-button {
  border: 1px solid #b91010;
}
</style>
