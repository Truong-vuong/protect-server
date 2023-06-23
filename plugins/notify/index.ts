import notify from "./notify.client";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(notify);
});
