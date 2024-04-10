// Utilities
import { createPinia } from 'pinia'
import persistedState from 'pinia-plugin-persistedstate'

export default createPinia().use(persistedState)
