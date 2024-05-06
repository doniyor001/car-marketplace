import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'vue-plyr/dist/vue-plyr.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import PrimeVue from 'primevue/config'
import VuePlyr from 'vue-plyr'
import '../api'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
    apiKey: "AIzaSyCoJOULVDu6n7mybCNMhb0KTy0pFhGyt-A",
    authDomain: "car-marketplace-c95ef.firebaseapp.com",
    projectId: "car-marketplace-c95ef",
    storageBucket: "car-marketplace-c95ef.appspot.com",
    messagingSenderId: "112681102219",
    appId: "1:112681102219:web:f4383b8b1deedeb28e9d8e"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(VuePlyr, {
    plyr: {}
})
app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')