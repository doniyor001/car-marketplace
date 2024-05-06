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
    <form class="flex flex-column gap-2" style="margin-left: 450px">
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
        <Button label="Signup" @click="signup"></Button>
        <Button label="Back Home" @click="back"></Button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.background {
  background-image: url('https://www.teslarati.com/wp-content/uploads/2023/08/tesla-model-s-red-e1692063874544-1024x665.jpeg');
}
</style>
