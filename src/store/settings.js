import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        filePath: ref("./DnsList.json"),
        firstwarn:false
    }),
    persist:true

})