import { defineStore } from "pinia";

export const useShowLoading = defineStore('loading', () => {
    const isShowLoading = ref(false);
    const isCloseNotify = ref(false);
    return {
        isShowLoading,
        isCloseNotify,
    }
})