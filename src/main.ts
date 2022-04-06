import { createApp } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import Toast from 'vue-toastification'

import './styles/main.css'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import initializeRouter from './router'
import { apolloClient } from './plugins'

const app = createApp(App)

initializeRouter(app)

app.provide(DefaultApolloClient, apolloClient).use(Toast).mount('#app')
