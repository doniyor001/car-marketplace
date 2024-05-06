<script setup>
// import { ref } from 'vue'

// import Card from 'primevue/card'

const images = [
  '../assets/model_3_2019.jpg',
  '../assets/model_3_2021.jpg',
  '../assets/model_3_2022.jpg'
]
console.log(images[0])
let d = document.querySelector('im')
d.src = images[0]
</script>

<template>
  <!-- <div>
    <Card v-for="(image, index) in images" :key="index" style="background-color: beige">
      <img :src="image" alt="Image" />
    </Card>
  </div> -->

  // eslint-disable-next-line vue/no-parsing-error

  <img class="im" src="../assets/model_3_2019.jpg" alt="Image" />
</template>
