import { createApp } from 'vue'
import App from './App.vue'

import store from './vuex/store'
import router from './router/router'
import 'material-design-icons-iconfont'

import axios from 'axios'
import '@/assets/styles/nullStyles.scss';

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

axios.defaults.baseURL = 'http://localhost:5000/api';

app.config.globalProperties.$filters = {
    toFix(value) {
        console.log('hhhhhhhh')
        value = parseFloat(value)
        value = value.toFixed(2) 
        //return value + '  ' + '₴'
        let parts = value.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        value =  parts.join(".")
        
        return value + '  ' + '₴'
    }
}
