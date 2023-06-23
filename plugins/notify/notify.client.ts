import notify from "./Notify.vue";
import { createApp } from "vue";
import { Notify } from "~~/types/notify";

export default {
  install: (app: any) => {
    const nuxtApp = useNuxtApp();
    nuxtApp.provide("notify", (options: Notify) => initElement(options));
    const initElement = (options: Notify) => {
      const notifyComponent: any = document.getElementById("notify");
      if (notifyComponent) {
        removeElement(notifyComponent);
        createElement(options);
        const currentNotifyComponent: any = document.getElementById("notify");
        if (options.timeout) {
          setTimeout(() => {
            removeElement(currentNotifyComponent);
          }, options.timeout*1000)
        };
      } else {
        createElement(options);
      };

      nuxtApp.$bus.$on("close", () => {
        const closeNotifyComponent: any = document.getElementById("notify");
        removeElement(closeNotifyComponent)
      });
    };

    const createElement = (options: Notify) => {
      const parentNode = document.getElementById("__nuxt");
      const notifyNode = document.createElement("div");
      notifyNode.setAttribute("id", "notify");
      parentNode?.appendChild(notifyNode);
      app.component("notify", notify);
      const mountComponent = createApp(app.component("notify"), {
        timeout: options.timeout,
        text: options.text,
        width: options.width,
        height: options.height,
        type: options.type,
      });
      mountComponent.mount(notifyNode);
      if(options.timeout) {
        setTimeout(() => {
          notifyNode.remove();
        }, options.timeout*1000);
      }
      return mountComponent;
    };

    const removeElement = (element?: HTMLElement) => {
      element?.remove();
    };

  },
};
