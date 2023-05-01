import { createApp } from 'vue'
import App from './App.vue'

//Font Awesome Config
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'
import { faBars } from '../node_modules/@fortawesome/free-solid-svg-icons'
library.add(faBars)

// CSS Global Config
import './styles/global.css'

// Criando coponente VUE
const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

