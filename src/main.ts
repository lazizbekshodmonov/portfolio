// import { VueGoogleMaps } from '@fawmi/vue-google-maps';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'uno.css'
import './assets/main.css'
import './assets/inte-fonts/stylesheet.css'
import './assets/icomoon/style.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(VueGoogleMaps(), {
//     load: {
//         key: '9cb61e1cde391c4d',
//         libraries: 'places',
//     }
// })
app.mount('#app')
