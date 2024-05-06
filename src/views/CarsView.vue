<script setup>
import { ref, onMounted } from 'vue'
import axiosApiInstance from '../../api'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

import Card from 'primevue/card'
import Loader from '../components/Loader.vue'
import Button from 'primevue/button'
import MegaMenu from 'primevue/megamenu'
import Avatar from 'primevue/avatar'
import Image from 'primevue/image'

const authStore = useAuthStore()
const router = useRouter()

const cars = ref([])
const showLoader = ref(false)

const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push('/signin')
}

const getAllCars = async () => {
  showLoader.value = true
  try {
    const response = await axiosApiInstance.get(
      `https://car-marketplace-c95ef-default-rtdb.europe-west1.firebasedatabase.app/cars.json`
    )
    cars.value = response.data
  } catch (err) {
    console.log(err.response)
  } finally {
    showLoader.value = false
  }
}


const images = ref([
  'https://car-images.bauersecure.com/wp-images/12942/051-tesla-model-3-2024-review.jpg',
  'https://ev-database.org/img/auto/Tesla_Model_3_2024/Tesla_Model_3_2024-01@2x.jpg'
])

onMounted(async () => {
  await getAllCars()
})
</script>

<template>
  <div class="card" style="position: fixed; width: 99%; top: 0; z-index: 35">
    <MegaMenu :model="items" class="p-2 surface-0">
      <template #start>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png"
          alt="Image"
          width="50"
        />
      </template>
      <template #item="{ item }">
        <a
          v-if="item.root"
          v-ripple
          class="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase"
          style="border-radius: 2rem"
        >
          <span class="ml-2">{{ item.label }}</span>
        </a>
        <a v-else-if="!item.image" class="flex align-items-center p-1 cursor-pointer mb-2 gap-1">
          <span class="inline-flex flex-column gap-0">
            <span class="font-medium font-italic text-lg text-700">{{ item.label }}</span>
          </span>
        </a>
        <div v-else>
          <span>{{ item.subtext }}</span>
          <div class="flex align-items-center gap-3 cursor-pointer">
            <img alt="megamenu-demo" :src="item.image" class="h-12 w-8" />
          </div>
        </div>
      </template>
      <template #end>
        <Button @click="logout" label="Logout" class="mr-2" />
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
      </template>
    </MegaMenu>
  </div>
  <br />
  <br />
  <br />
  <br />
  <div>
    <Loader v-if="showLoader" />
    <div class="flex flex-wrap justify-content-center gap-3" v-else>
      <Card v-for="(car, i) in cars" class="myCard" :key="i">
        <template #header>
          <img alt="user header" :src="images[i]" />
        </template>
        <template #title>{{ car.name }}</template>
        <template #subtitle>{{ car.price }}</template>
        <template #content>
          <p class="m-0">Main Information:</p>
          <p class="m-0">Speed:{{ car.speed }}</p>
          <p class="m-0">KM:{{ car.km }}</p>
          <p class="m-0">Time:{{ car.time }}</p>
          <p class="m-0">Year:{{ car.year }}</p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-2">
            <Button @click="buy" label="Buy" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.myCard {
  width: 23%;
  border: 5rem;
  border-radius: 2rem;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
.myCard img {
  width: 100%;
  border-radius: 2rem;
}
</style>
