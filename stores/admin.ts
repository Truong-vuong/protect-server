import { defineStore } from 'pinia';

export const useAdminStore = defineStore('adminStore', {
  state: () => {
    return {
      tabActive: 'Overview',
    };
  },
  getters: {},
  actions: {
    chooseTab(item: string) {
      this.tabActive = item;
    },
  },
});
